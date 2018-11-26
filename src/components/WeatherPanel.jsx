import React from 'react';

import Dots from 'components/Dots';
import Temperature from 'components/Temperature';
import Wind from 'components/Wind';

import 'styles/icons/owfont-regular.css';
import './WeatherPanel.css';

const WeatherPanel = ({ locations, currentIndex, setLocation }) => {
  const { location, weather, temperature, wind } = locations[currentIndex];

  return (
    <>
      <Location name={location} />
      <Wind {...wind} />
      <WeatherIcon iconName={weather} />
      <Temperature {...temperature} />
      <Dots
        locations={locations}
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
