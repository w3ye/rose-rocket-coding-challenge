export default function OrderItem(props) {
  const { order } = props;
  return (
    <div className="card">
      <span className="description">{order.description}</span>
      <span className="revenue">${order.revenue}</span>
      <span className="cost">${order.cost}</span>
      <button type="button" className="edit">
        Edit
      </button>
    </div>
  );
}
