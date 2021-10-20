import OrderItemList from "./OrderItemList";

export default function DriverColumnItem(props) {
  const { driverOrder } = props;
  return (
    <div className="list-wrapper">
      {driverOrder.id === null ? (
        <div className="list-header left">Unassigned Orders</div>
      ) : (
        <div className="list-header">
          Drivers {driverOrder.first_name} {driverOrder.last_name}{" "}
        </div>
      )}
      <OrderItemList orders={driverOrder.orders} />
    </div>
  );
}
