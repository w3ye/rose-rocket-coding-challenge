import OrderItem from "./OrderItem";

export default function OrderItemList(props) {
  const { orders } = props;
  const parsedOrders = orders.map((i) => {
    return <OrderItem order={i} />;
  });

  return <ul>{parsedOrders}</ul>;
}
