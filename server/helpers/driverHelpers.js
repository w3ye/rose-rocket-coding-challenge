module.exports = (db) => {
  /**
   * Retrieve all drivers from database
   * @returns {Promise}
   */
  const getDrivers = () => {
    const query = "SELECT * FROM drivers;";
    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => {
        return err;
      });
  };

  /**
   * Retrieve driver info by driver id
   * @param {Number} id Driver id
   * @returns {Promise}
   */
  const getDriver = (id) => {
    const query = {
      text: "SELECT * FROM drivers WHERE id = $1;",
      values: [id],
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

  /**
   * Delete a driver by id
   * @param {Number} id
   * @returns {Promise}
   */
  const deleteDriver = (id) => {
    return db
      .query("DELETE FROM drivers WHERE id = $1 RETURNING *;", [id])
      .then((result) => {
        return result.rows[0];
      })
      .catch((err) => {
        return err;
      });
  };

  return {
    getDrivers,
    getDriver,
    deleteDriver,
  };
};
