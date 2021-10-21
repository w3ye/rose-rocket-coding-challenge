import { useState, useEffect } from "react";
import axios from "axios";
import DriverColumnItem from "../components/DriverColumnItem";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="driver-col">{parsedDriverOrders}</div>
    </DndProvider>
  );
}
