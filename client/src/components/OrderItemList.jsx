import OrderItem from "./OrderItem";

export default function OrderItemList(props) {
  const { orders } = props;

  const parsedOrders = orders.map((i) => {
    return (
      <div className="list-item" key={i.id}>
        <OrderItem order={i} key={i.id} />
      </div>
    );
  });

  return (
    <ul>
      <div className="list-heading">
        <span>Description</span>
        <span>Revenue</span>
        <span>Cost</span>
        <span></span>
      </div>
      {parsedOrders}
    </ul>
  );
}
