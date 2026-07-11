function JourneyCard({ route, rank }) {

  return (
    <div className="train-card">

      {rank === 0 && <h2>🥇 Best Recommended Route</h2>}
      {rank === 1 && <h2>🥈 Second Best Route</h2>}
      {rank === 2 && <h2>🥉 Third Best Route</h2>}
      {rank > 2 && <h2>🚆 Alternative Route</h2>}

      <hr />

      <h3>🚆 First Train</h3>

      <p><strong>{route.firstTrain.trainName}</strong></p>

      <p>Train No: {route.firstTrain.trainNo}</p>

      <p>
        📍 {route.source} ➜ {route.changeStation}
      </p>

      <p>
        🕒 {route.firstTrain.departure} → {route.firstTrain.arrival}
      </p>

      <p>
        🚉 Platform {route.firstTrain.platform}
      </p>

      <hr />

      <h3>⏳ Train Change</h3>

      <p>
        Change at <strong>{route.changeStation}</strong>
      </p>

      <p>
        Waiting Time: {route.waitingTime} minutes
      </p>

      <hr />

      <h3>🚆 Second Train</h3>

      <p><strong>{route.secondTrain.trainName}</strong></p>

      <p>Train No: {route.secondTrain.trainNo}</p>

      <p>
        📍 {route.changeStation} ➜ {route.destination}
      </p>

      <p>
        🕒 {route.secondTrain.departure} → {route.secondTrain.arrival}
      </p>

      <p>
        🚉 Platform {route.secondTrain.platform}
      </p>

      <hr />

      <h3>📊 Journey Summary</h3>

      <p>💰 Total Fare: ₹{route.totalFare}</p>

      <p>⏱ Total Duration: {route.totalDuration} minutes</p>

      <p>💺 Seats: {route.firstTrain.seat} / {route.secondTrain.seat}</p>

      <p><strong>⭐ AI Recommendation Score: {route.score}/100</strong></p>

    </div>
  );
}

export default JourneyCard;