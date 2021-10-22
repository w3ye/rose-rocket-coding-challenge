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

  router.delete("/delete/driver/:id", async (req, res) => {
    const driverId = req.params.id;
    // Get all the orders this driver's got and unassign them
    const orders = await orderDB.getOrdersByDriverId(driverId);

    orders.forEach(async (order) => {
      order.driver_id = null;
      await orderDB.updateOrder(order);
    });

    // delete the driver
    const result = await driverDB.deleteDriver(driverId);

    res.json(result);
  });

  return router;
};
