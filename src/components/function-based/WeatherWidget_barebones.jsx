import React from 'react';

import Loading from 'components/Loading';
import WeatherPanel from 'components/WeatherPanel';
// import { fetchData } from 'services/weatherService';

import './WeatherWidget.css';

const WeatherWidget = () => {
  const locations = [];
  let currentLocation = null;
  const setCurrentLocation = loc => currentLocation = loc;

  return (
    <div className="weather-widget">
      { currentLocation === null
        ? <Loading />
        : <WeatherPanel
            locations={locations}
            currentIndex={currentLocation}
            setLocation={setCurrentLocation}
          />
      }
    </div>
  );
};

export default WeatherWidget;
