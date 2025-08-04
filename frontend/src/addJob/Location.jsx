import React, { useState } from "react";
import JobInformation from "./JobInformation";
import VideoAndMoreDetails from "./VideoAndMoreDetails";

const Location = ({ form, handleChange }) => {
  const [locations, setLocations] = useState([
    "Arkansas",
    "Berlin",
    "Consectetur animi e",
    "Houston",
    "Lome",
    "London",
    "Los Angeles",
    "New York",
    "Proident cupiditate",
    "Tokyo",
  ]);

  const [newLocations, setNewLocations] = useState("");

  const handleAddLocations = () => {
    const newItems = newLocations
      .split(",")
      .map((loc) => loc.trim())
      .filter((loc) => loc && !locations.includes(loc));

    setLocations((prev) => [...prev, ...newItems]);
    setNewLocations("");
  };

  const middleIndex = Math.ceil(locations.length / 2);
  const firstHalf = locations.slice(0, middleIndex);
  const secondHalf = locations.slice(middleIndex);

  return (
    <div>
      <h2>Location</h2>
      <hr />

      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "300px" }}>
          {firstHalf.map((location, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={location.toLowerCase().replace(/\s/g, "")}
                name="location"
                value={location}
              />
              <label htmlFor={location.toLowerCase().replace(/\s/g, "")}>
                &nbsp;{location}
              </label>
              <br />
              <br />
            </div>
          ))}
        </div>

        <div style={{ flex: 1, minWidth: "300px" }}>
          {secondHalf.map((location, index) => (
            <div key={index + middleIndex}>
              <input
                type="checkbox"
                id={location.toLowerCase().replace(/\s/g, "")}
                name="location"
                value={location}
              />
              <label htmlFor={location.toLowerCase().replace(/\s/g, "")}>
                &nbsp;{location}
              </label>
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "10px" }}>
        <label htmlFor="newLocations">Enter New Locations: </label>
        <input
          type="text"
          id="newLocations"
          value={newLocations}
          onChange={(e) => setNewLocations(e.target.value)}
          placeholder="Separate with commas"
        />
        <button onClick={handleAddLocations} style={{ marginLeft: "10px" }}>
          Add
        </button>
      </div>
      
    </div>
  );
};

export default Location;
