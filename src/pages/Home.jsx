import { useState } from "react";

import TrainCard from "../components/TrainCard";
import JourneyCard from "../components/JourneyCard";
import StationInput from "../components/StationInput";

import { stationData } from "../data/stations";
import { alternativeRoutes } from "../data/alternativeRoutes";
import { allStations } from "../data/allStations";

import { findDirectRoutes } from "../algorithms/routeFinder";
import { findOneChangeRoute } from "../algorithms/changeRouteFinder";
import { findBestRoutes } from "../algorithms/bestRouteFinder";
import { filterRoutes } from "../algorithms/filterRoutes";
import Timeline from "../components/Timeline";
function Home() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [priority, setPriority] = useState("");
  const [showResults, setShowResults] = useState(false);

  const [results, setResults] = useState({
    direct: [],
    change: [],
  });

  const alternativeStations = stationData[source] || [];

  const handleSearch = () => {
    if (!source || !destination || !journeyDate || !priority) {
      alert("Please fill all the details.");
      return;
    }

    const directRoutes = findDirectRoutes(source, destination);

    const changeRoutes = findOneChangeRoute(source, destination);

    const bestRoutes = findBestRoutes(changeRoutes);
    const filteredRoutes = filterRoutes(bestRoutes,priority); 
    setResults({
      direct: directRoutes,
      change: filteredRoutes,
    });

    setShowResults(true);
  };
  return (
    <div className="container">
      <h1>🚆 TrainSavvy</h1>
      <p>Travel Smarter, Not Harder.</p>

      <StationInput
        placeholder="Enter Source Station"
        value={source}
        setValue={setSource}
        stations={allStations}
      />

      <StationInput
        placeholder="Enter Destination Station"
        value={destination}
        setValue={setDestination}
        stations={allStations}
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

      {alternativeStations.length > 0 && (
        <div className="train-card">
          <h2>🚉 Alternative Boarding Stations</h2>

          {alternativeStations.map((station, index) => (
            <p key={index}>✅ {station}</p>
          ))}
        </div>
      )}

      {showResults && (
        <>
          <h2 className="results-heading">
            🚆 Recommended Direct Trains
          </h2>

          {results.direct.length > 0 ? (
            results.direct.map((train) => (
              <TrainCard
                key={train.trainNo}
                train={{
                  name: train.trainName,
                  departure: train.departure || "--",
                  arrival: train.arrival || "--",
                  duration: train.duration || "--",
                  fare: train.fare || "--",
                  platform: train.platform || "--",
                  changes: 0,
                  seat: train.seat || "--",
                  reason: "Direct Route",
                }}
              />
            ))
          ) : (
            <p>🚆 No direct trains found.</p>
          )}

          {results.change.length > 0 && (
            <>
              <h2>🚆 Smart Route Recommendation</h2>

              {results.change.map((route, index) => (
  <div key={index}>
    <JourneyCard
      route={route}
      rank={index}
    />

    <Timeline route={route} />
  </div>
))}
            </>
          )}

          <h2>⭐ Smarter Alternative Routes</h2>

          {alternativeRoutes.map((route, index) => (
            <div className="train-card" key={index}>
              <h3>
                {route.alternativeStation} → {route.destination}
              </h3>

              <p>⏱ Time Saved: {route.timeSaved}</p>

              <p>💰 Money Saved: {route.moneySaved}</p>

              <p>📌 {route.reason}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Home;