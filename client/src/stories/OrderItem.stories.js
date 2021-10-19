import OrderItem from "../components/OrderItem";
import "../components/App.scss";

export default {
  title: "OrderItem",
  component: OrderItem,
};

export const Primary = () => (
  <OrderItem description={"Construction Material"} revenue={1000} cost={50} />
);
