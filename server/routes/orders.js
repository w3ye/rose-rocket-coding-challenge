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

  router.get("/:id", (req, res) => {
    db.getOrder(req.params.id)
      .then((order) => {
        res.json(order);
      })
      .catch((err) => {
        res.json({ error: err.message });
      });
  });

  router.put("/", (req, res) => {
    db.updateOrder(req.body)
      .then((result) => {
        res.json({ success: true });
      })
      .catch((err) => {
        res.json({ error: err.message });
      });
  });

  return router;
};
