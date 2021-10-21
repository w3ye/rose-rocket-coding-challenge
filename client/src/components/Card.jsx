import { useDrag } from "react-dnd";
export default function OrderItem(props) {
  const { order } = props;

  // eslint-disable-next-line no-unused-vars
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: order,
    collection: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className="card" ref={drag}>
      <span className="description">{order.description}</span>
      <span className="revenue">${order.revenue}</span>
      <span className="cost">${order.cost}</span>
      <button type="button" className="edit">
        Edit
      </button>
    </div>
  );
}
