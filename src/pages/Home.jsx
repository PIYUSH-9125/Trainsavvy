import { useState } from "react";

function Home() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [priority, setPriority] = useState("");
  const handleSearch = () => {
  alert(
    `Source: ${source}
Destination: ${destination}
Journey Date: ${journeyDate}
Priority: ${priority}`
  );
};
  return (
    <div className="container">
      <h1>🚆 TrainSavvy</h1>
      <p>Travel Smarter, Not Harder.</p>

      <input
        type="text"
        placeholder="Enter Source Station"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Destination Station"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <label>Journey Date</label>
      <input
        type="date"
        value={journeyDate}
        onChange={(e) => setJourneyDate(e.target.value)}
      />

      <h3>What matters today?</h3>

      <div className="options">
        <label>
          <input
            type="radio"
            name="priority"
            value="Fastest Journey"
            onChange={(e) => setPriority(e.target.value)}
          />
          Fastest Journey
        </label>
        
        
        <label>
          <input
            type="radio"
            name="priority"
            value="Cheapest Journey"
            onChange={(e) => setPriority(e.target.value)}
          />
          Cheapest Journey
        </label>

        <label>
          <input
            type="radio"
            name="priority"
            value="Confirmed Seat"
            onChange={(e) => setPriority(e.target.value)}
          />
          Confirmed Seat
        </label>

        <label>
          <input
            type="radio"
            name="priority"
            value="Least Train Changes"
            onChange={(e) => setPriority(e.target.value)}
          />
          Least Train Changes
        </label>
      </div>

      <button onClick={handleSearch}>
  Search Trains
</button>

    </div>
  );
}

export default Home;