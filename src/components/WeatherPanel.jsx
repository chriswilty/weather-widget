import React from 'react';

import Dots from 'components/Dots';
import Location from 'components/Location';
import Temperature from 'components/Temperature';
import WeatherIcon from 'components/WeatherIcon';
import Wind from 'components/Wind';

import 'styles/icons/owfont-regular.css';

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

export default WeatherPanel;
