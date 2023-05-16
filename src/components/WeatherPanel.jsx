import React from 'react';

import { make as Navigator } from 'components/Navigator.bs';
import { make as Location } from 'components/Location.bs';
import { make as Temperature } from 'components/Temperature.bs';
import { make as WeatherIcon } from 'components/WeatherIcon.bs';
import { make as Wind } from 'components/Wind.bs';

const WeatherPanel = ({ weatherData, currentIndex, setLocation }) => {
  const { location, weather: { code, description }, temperature, wind } = weatherData[currentIndex];
  const locations = weatherData.map(({ location }) => location);

  return (
    <>
      <Location name={location} />
      <Wind {...wind} />
      <WeatherIcon {...{ code, description }} />
      <Temperature {...temperature} />
      <Navigator
        locations={locations}
        currentIndex={currentIndex}
        onSelected={setLocation}
      />
    </>
  )
};

export default WeatherPanel;
