import { Fragment } from "react";
import OrderItemList from "./OrderItemList";
import { useDrop } from "react-dnd";

export default function DriverColumnItem(props) {
  const { driverOrder } = props;

  const [, drop] = useDrop(() => ({
    accept: "card",
    drop: () => console.log("land here"),
  }));
  return (
    <>
      {driverOrder.id === null ? (
        <div className="list-wrapper driver-col-first" ref={drop}>
          <div className="list-header">Unassigned Orders</div>
          <OrderItemList orders={driverOrder.orders} />
        </div>
      ) : (
        <div className="list-wrapper" ref={drop}>
          <div className="list-header">
            Drivers {driverOrder.first_name} {driverOrder.last_name}{" "}
          </div>
          <OrderItemList orders={driverOrder.orders} />
        </div>
      )}
    </>
  );
}
