import { Fragment } from "react";
import OrderItemList from "./OrderItemList";

export default function DriverColumnItem(props) {
  const { driverOrder } = props;
  return (
    <>
      {driverOrder.id === null ? (
        <div className="list-wrapper driver-col-first">
          <div className="list-header">Unassigned Orders</div>
          <OrderItemList orders={driverOrder.orders} />
        </div>
      ) : (
        <div className="list-wrapper">
          <div className="list-header">
            Drivers {driverOrder.first_name} {driverOrder.last_name}{" "}
          </div>
          <OrderItemList orders={driverOrder.orders} />
        </div>
      )}
    </>
  );
}
