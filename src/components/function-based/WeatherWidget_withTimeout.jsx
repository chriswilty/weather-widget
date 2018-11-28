import React, { useState, useEffect } from 'react';

import Loading from 'components/Loading';
import WeatherPanel from 'components/WeatherPanel';
import weatherData from 'data/weatherData';

import './WeatherWidget.css';

const pause = async (ms) => new Promise(resolve =>
  setTimeout(resolve, ms)
);

const WeatherWidget = () => {
  const [ locations, setLocations ] = useState([]);
  const [ currentLocation, setCurrentLocation ] = useState(null);

  useEffect(() => {
    fetchData().then(data => {
      setLocations(data);
      setCurrentLocation(0);
    });
  }, []); // Only runs on mount... MAAAGIC :|

  useEffect(() => {
      const timerId = setTimeout(incrementLocation, 2500);
      logWithTime(`starting new timer ${timerId}`);
      return () => {
        logWithTime(`clearing timer ${timerId}`);
        clearTimeout(timerId);
      }
    },
    [currentLocation]
  );

  const fetchData = async () => {
    // Fake a server call.
    await pause(1000);
    return weatherData.slice();
  };

  const incrementLocation = () =>
    currentLocation !== null &&
    setCurrentLocation((currentLocation + 1) % locations.length);

  const logWithTime = message =>
    console.log(`${new Date().toLocaleTimeString()} ${message}`);

  return (
    <div className="weather-widget">
      { locations.length === 0 || currentLocation === null
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
