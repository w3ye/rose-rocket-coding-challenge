export default function OrderItem(props) {
  return (
    <div className="card">
      <span className="description">{props.description}</span>
      <span className="revenue">${props.revenue}</span>
      <span className="cost">${props.cost}</span>
      <button type="button" className="edit">
        Edit
      </button>
    </div>
  );
}
