import { useState, useEffect } from "react";
import axios from "axios";
import DriverColumnItem from "../components/DriverColumnItem";

export default function DriverColumnList(props) {
  const [driversOrders, setDriversOrders] = useState([]);
  useEffect(() => {
    axios.get("/api/drivers/orders").then((result) => {
      setDriversOrders(result.data);
    });
  }, []);

  const parsedDriverOrders = driversOrders.map((driverOrder, index) => {
    return <DriverColumnItem driverOrder={driverOrder} key={index} />;
  });

  return <div className="driver-col">{parsedDriverOrders}</div>;
}
