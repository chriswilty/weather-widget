import React from 'react';

import './Wind.css';

const Wind = ({ speed, fromDegrees }) => {
  const normalisedDegrees = fromDegrees === 360 ? 0 : fromDegrees;
  return (
    <div className="wind">
      <i
        className="wind-icon"
        style={{"transform": `rotate(${normalisedDegrees}deg)`}}
      />
      <div className="wind-speed">{speed} <span className="units">m/s</span></div>
    </div>
  );
};

export default Wind;
