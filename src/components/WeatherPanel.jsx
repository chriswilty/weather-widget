import React from 'react';

import Dots from 'components/Dots';
import { make as Location } from 'components/Location.bs';
import Temperature from 'components/Temperature';
import { make as WeatherIcon } from 'components/WeatherIcon.bs';
import Wind from 'components/Wind';

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
