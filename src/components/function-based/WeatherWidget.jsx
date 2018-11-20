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

  useEffect(async () => {
    const data = await fetchData();
    setLocations(data);
    setCurrentLocation(0);
  }, []); // Only runs on mount! MAAAGIC

  useEffect(
    () => {
      const timeoutId = setTimeout(() => {
          if (currentLocation !== null) {
            setCurrentLocation(
              (currentLocation + 1) % locations.length
            );
          }
        }, 2500
      );
      console.log(`starting new timer ${timeoutId}`);
      return () => {
        console.log(`clearing timer ${timeoutId}`);
        clearTimeout(timeoutId);
      }
    },
    [currentLocation] // Only runs when currentLocation has changed
  );

  const fetchData = async () => {
    // Fake a server call.
    await pause(1000);
    return weatherData.slice();
  };

  return (
    <div className="weather-widget">
      { locations.length === 0
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
