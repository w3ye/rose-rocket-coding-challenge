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
        return result.rows;
      })
      .catch((err) => {
        return err;
      });
  };

  return {
    getOrders,
  };
};
