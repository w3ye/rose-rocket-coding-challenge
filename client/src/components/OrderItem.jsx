import { useDrag } from "react-dnd";
export default function OrderItem(props) {
  const { order } = props;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    collection: (monitor) => ({
      isDragging: !!monitor.isDraggin(),
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
