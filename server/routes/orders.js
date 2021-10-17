const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.getOrders()
      .then((drivers) => {
        res.json(drivers);
      })
      .catch((err) => {
        res.json({ error: err.message });
      });
  });

  return router;
};
