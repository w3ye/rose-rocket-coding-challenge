/**
 * Convert cents to dollars
 * @param {Object} order
 * @returns {Object}
 */
const humanizeMoney = (order) => {
  const { revenue_cents, cost_cents, ...rest } = order;
  return {
    ...rest,
    revenue: revenue_cents / 100,
    cost: cost_cents / 100,
  };
};

/**
 * Convert dollars into cents
 * @param {Object} order
 * @returns {Object}
 */
const unHumanizeMoney = (order) => {
  const { revenue, cost, ...rest } = order;
  return {
    ...rest,
    revenue_cents: revenue * 100,
    cost_cents: cost * 100,
  };
};

module.exports = (db) => {
  /**
   * Retrieve all orders from database
   * @returns {Promise}
   */
  const getOrders = () => {
    const query = "SELECT * FROM orders;";
    return db
      .query(query)
      .then((result) => {
        const orders = [];
        result.rows.forEach((order) => {
          orders.push(humanizeMoney(order));
        });
        return orders;
      })
      .catch((err) => {
        return err;
      });
  };

  /**
   * Retrieve an order by order id
   * @param {Number} id order id
   * @returns {Promise}
   */
  const getOrder = (id) => {
    return db
      .query("SELECT * FROM orders WHERE id = $1;", [id])
      .then((result) => {
        return humanizeMoney(result.rows[0]);
      })
      .catch((err) => {
        return err;
      });
  };

  /**
   * Retrives all orders belonging to a driver
   * @param {Numbers} driverId driver id
   * @returns {Promise}
   */
  const getOrdersByDriverId = (driverId) => {
    const query =
      driverId === null
        ? "SELECT * FROM orders WHERE driver_id IS NULL"
        : "SELECT * FROM orders WHERE driver_id = $1";
    const values = driverId === null ? null : [driverId];

    return db
      .query(query, values)
      .then((result) => {
        const orders = [];
        result.rows.forEach((order) => {
          orders.push(humanizeMoney(order));
        });
        return orders;
      })
      .catch((err) => {
        return err;
      });
  };

  /**
   * Update order (revenue/cost and assigning driver) to database
   * @param {Object} order order that needs to be updated
   * @returns {Promise}
   */
  const updateOrder = (order) => {
    const unHuamizedOrder = unHumanizeMoney(order);
    const query = {
      text: `
        UPDATE orders
        SET 
        revenue_cents = $1, 
        cost_cents = $2,
        driver_id = $3
        WHERE id = $4
        RETURNING *;
      `,
      values: [
        unHuamizedOrder.revenue_cents,
        unHuamizedOrder.cost_cents,
        unHuamizedOrder.driver_id,
        unHuamizedOrder.id,
      ],
    };

    return db
      .query(query)
      .then((result) => {
        return result.rows[0];
      })
      .catch((err) => {
        return err;
      });
  };

  return {
    getOrders,
    updateOrder,
    getOrder,
    getOrdersByDriverId,
  };
};
