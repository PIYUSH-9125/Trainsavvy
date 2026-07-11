function Timeline({ route }) {
  return (
    <div className="train-card">

      <h2>🗺 Journey Timeline</h2>

      <div className="timeline">

        <div>📍 {route.source}</div>

        <div>│</div>

        <div>🚆 {route.firstTrain.trainName}</div>

        <div>│</div>

        <div>📍 {route.changeStation}</div>

        <div>⏳ Wait {route.waitingTime} min</div>

        <div>│</div>

        <div>🚆 {route.secondTrain.trainName}</div>

        <div>│</div>

        <div>🏁 {route.destination}</div>

      </div>

    </div>
  );
}

export default Timeline;