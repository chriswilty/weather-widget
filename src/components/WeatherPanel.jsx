import React from 'react';

import Dots from 'components/Dots';
import Temperature from 'components/Temperature';

import 'styles/icons/owfont-regular.css';
import './WeatherPanel.css';

const WeatherPanel = ({ locations, currentIndex, setLocation }) => {
  console.log(`locations=${locations} currentIndex=${currentIndex}`);
  const { location, weather, temperature } = locations[currentIndex];

  return (
    <>
      <Location name={location} />
      <WeatherIcon iconName={weather} />
      <Temperature {...temperature} />
      <Dots
        count={locations.length}
        currentIndex={currentIndex}
        onSelected={setLocation}
      />
    </>
  )
};

const Location = ({ name }) => (
  <div className="location">{name}</div>
);

const WeatherIcon = ({ iconName }) => (
  <div className="weather-icon">
    <i className={`owf owf-5x owf-${iconName}`} />
  </div>
);

export default WeatherPanel;
