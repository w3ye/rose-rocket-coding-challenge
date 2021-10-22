import { Fragment } from "react";
import CardList from "./CardList";
import { useDrop } from "react-dnd";

export default function DriverColumnItem(props) {
  const { driverOrder, updateOrder } = props;

  const [, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => handleDrop(item),
  }));

  // Assign drop area driver to draged item
  const handleDrop = (order) => {
    const _order = order;
    _order.driver_id = driverOrder.id;
    updateOrder(_order);
  };

  return (
    <>
      {driverOrder.id === null ? (
        <div className="list-wrapper driver-col-first" ref={drop}>
          <div className="list-header">Unassigned Orders</div>
          <CardList orders={driverOrder.orders} updateOrder={updateOrder} />
        </div>
      ) : (
        <div className="list-wrapper" ref={drop}>
          <div className="list-header">
            Drivers {driverOrder.first_name} {driverOrder.last_name}{" "}
          </div>
          <CardList orders={driverOrder.orders} updateOrder={updateOrder} />
        </div>
      )}
    </>
  );
}
