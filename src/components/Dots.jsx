import React from 'react';

import './Dots.css';

const Dots = ({ locations, currentIndex, onSelected }) => {
  const dots = locations.map(({ location }, index) =>
    <input
			type="radio"
			name="locations"
      key={location}
      title={location}
			value={index}
      checked={index === currentIndex}
      onChange={() => onSelected(index)}
    />
  );

  return (
    <div role="group" aria-label="location selector" className="navigator">{dots}</div>
  )
};

export default Dots;
