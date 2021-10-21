import { Fragment } from "react";
import CardList from "./CardList";
import { useDrop } from "react-dnd";
import axios from "axios";

export default function DriverColumnItem(props) {
  const { driverOrder, setDriversOrders } = props;

  const [, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => handleDrop(item),
  }));

  const handleDrop = (item) => {
    const _item = item;
    _item.driver_id = driverOrder.id;

    // Assign drivers
    axios
      .put("/api/orders", _item)
      .then((result) => {
        // Update the state
        axios.get("/api").then((result) => setDriversOrders(result.data));
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {driverOrder.id === null ? (
        <div className="list-wrapper driver-col-first" ref={drop}>
          <div className="list-header">Unassigned Orders</div>
          <CardList orders={driverOrder.orders} />
        </div>
      ) : (
        <div className="list-wrapper" ref={drop}>
          <div className="list-header">
            Drivers {driverOrder.first_name} {driverOrder.last_name}{" "}
          </div>
          <CardList orders={driverOrder.orders} />
        </div>
      )}
    </>
  );
}
