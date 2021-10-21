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
