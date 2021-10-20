import DriverColumnItem from "../components/DriverColumnItem";
import useOrders from "../hooks/useOrders";

export default function DriverColumnList(props) {
  const { orders } = useOrders();
  return <DriverColumnItem orders={orders} />;
}
