import React from 'react';

import './Wind.css';

const Wind = ({ speed, fromDegrees }) => {
  const normalisedDegrees = fromDegrees % 360;
	const description = `Direction ${normalisedDegrees} degrees (Northerly being 0)`;

  return (
    <div role="region" aria-label="wind" className="wind">
      <i
				role="img"
				aria-label={description}
				title={description}
        className="wind-icon"
        style={{"transform": `rotate(${normalisedDegrees}deg)`}}
      />
      <div title="wind speed" className="wind-speed">
				{speed}
				<span className="units"> m/s</span>
			</div>
    </div>
  );
};

export default Wind;
