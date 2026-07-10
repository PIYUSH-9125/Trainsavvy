function TrainCard({ train }) {
  return (
    <div className="train-card">
      <h2>🚆 {train.name}</h2>

      <p><strong>Departure:</strong> {train.departure}</p>
      <p><strong>Arrival:</strong> {train.arrival}</p>
      <p><strong>Duration:</strong> {train.duration}</p>
      <p><strong>Fare:</strong> ₹{train.fare}</p>
      <p><strong>Platform:</strong> {train.platform}</p>
      <p><strong>Train Changes:</strong> {train.changes}</p>
      <p><strong>Seat Status:</strong> {train.seat}</p>
      <p><strong>Recommended For:</strong> {train.reason}</p>
    </div>
  );
}

export default TrainCard;