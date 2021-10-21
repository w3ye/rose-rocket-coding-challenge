import { useState, useEffect } from "react";
import axios from "axios";
import Column from "./Column";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function DriverColumnList(props) {
  const [driversOrders, setDriversOrders] = useState([]);

  useEffect(() => {
    // Fetch and setState of drivers and their orders
    axios.get("/api").then((result) => {
      setDriversOrders(result.data);
    });
  }, []);

  const parsedDriverOrders = driversOrders.map((driverOrder, index) => {
    return (
      <Column
        driverOrder={driverOrder}
        key={index}
        setDriversOrders={setDriversOrders}
      />
    );
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="driver-col">{parsedDriverOrders}</div>
    </DndProvider>
  );
}
