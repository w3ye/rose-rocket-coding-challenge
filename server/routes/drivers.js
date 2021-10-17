const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.getDrivers()
      .then((drivers) => {
        res.json(drivers);
      })
      .catch((err) => {
        res.json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    const driverId = req.params.id;
    db.getDriver(driverId)
      .then((driver) => {
        res.json(driver);
      })
      .catch((err) => {
        res.json({ error: err.message });
      });
  });

  return router;
};
