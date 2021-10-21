var express = require("express");
var router = express.Router();

module.exports = (driverDB, orderDB) => {
  router.get("/", async (req, res) => {
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
        }
      });
    });
    res.json(drivers);
  });
  return router;
};
