import { useState } from "react";

function StationInput({
  placeholder,
  value,
  setValue,
  stations,
}) {
  const [show, setShow] = useState(false);

  const filtered = stations.filter((station) =>
    station.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setShow(true);
        }}
      />

      {show && value !== "" && (
        <div className="suggestions">
          {filtered.map((station, index) => (
            <div
              key={index}
              className="suggestion-item"
              onClick={() => {
                setValue(station);
                setShow(false);
              }}
            >
              🚉 {station}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StationInput;