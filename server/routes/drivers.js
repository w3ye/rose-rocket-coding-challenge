const express = require("express");
const router = express.Router();

module.exports = (driverDB, orderDB) => {
  router.get("/", (req, res) => {
    driverDB
      .getDrivers()
      .then((drivers) => {
        res.json(drivers);
      })
      .catch((err) => {
        res.json({ error: err.message });
      });
  });

  router.get("/orders", async (req, res) => {
    const drivers = await driverDB.getDrivers();
    drivers.push({ id: null });
    drivers.forEach((i) => {
      i.orders = [];
    });
    const orders = await orderDB.getOrders();
    const _order = orders;
    drivers.forEach((driver) => {
      _order.forEach((order, i) => {
        if (order.driver_id === driver.id) {
          driver.orders.push(order);
          _order.splice(i, 1);
        }
      });
    });
    res.json(drivers);
  });

  router.get("/:id", (req, res) => {
    const driverId = req.params.id;
    driverDB
      .getDriver(driverId)
      .then((driver) => {
        res.json(driver);
      })
      .catch((err) => {
        res.json({ error: err.message });
      });
  });

  return router;
};
