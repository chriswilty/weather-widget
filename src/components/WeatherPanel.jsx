import React from 'react';

import Dots from 'components/Dots';
import Temperature from 'components/Temperature';
import Wind from 'components/Wind';

import 'styles/icons/owfont-regular.css';
import './WeatherPanel.css';

const WeatherPanel = ({ locations, currentIndex, setLocation }) => {
  const { location, weather: { code, description }, temperature, wind } = locations[currentIndex];

  return (
    <>
      <Location name={location} />
      <Wind {...wind} />
      <WeatherIcon {...{ code, description }} />
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
  <div title="location" className="location">{name}</div>
);

const WeatherIcon = ({ code, description }) => (
  <div role="img" aria-label={'weather: ' + description} className="weather-icon">
    <i title={description} className={`owf owf-5x owf-${code}`} />
  </div>
);

export default WeatherPanel;
