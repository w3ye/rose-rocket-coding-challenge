import OrderItemList from "./OrderItemList";

export default function DriverColumnItem(props) {
  return (
    <div className="list-wrapper">
      <div className="list-header">{props.driver}</div>
      <OrderItemList orders={props.orders} />
    </div>
  );
}
