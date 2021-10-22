var express = require("express");
var router = express.Router();

module.exports = (driverDB, orderDB) => {
  router.get("/", async (req, res) => {
    const drivers = await driverDB.getDrivers();
    drivers.push({ id: null });

    for (const driver of drivers) {
      const orders = await orderDB.getOrdersByDriverId(driver.id);
      driver.orders = orders;
    }

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
