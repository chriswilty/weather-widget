import React, { useState, useEffect } from 'react';

import Loading from 'components/Loading';
import WeatherPanel from 'components/WeatherPanel';
import weatherData from 'data/weatherData';

import './WeatherWidget.css';

const pause = async (ms) => new Promise(resolve =>
  setTimeout(resolve, ms)
);

const WeatherWidget = () => {
  const locations = [];
  let currentLocation = null;
  const setCurrentLocation = loc => currentLocation = loc;

  const fetchData = async () => {
    // Fake a server call.
    await pause(1000);
    return weatherData.slice();
  };

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
