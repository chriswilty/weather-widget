import React, { useState, useEffect } from 'react';

import Loading from 'components/Loading';
import WeatherPanel from 'components/WeatherPanel';
import weatherData from 'data/weatherData';
import useInterval from 'hooks/interval';

import './WeatherWidget.css';

const pause = async (ms) => new Promise(resolve =>
  setTimeout(resolve, ms)
);

const WeatherWidget = () => {
  const [ locations, setLocations ] = useState([]);
  const [ currentLocation, setCurrentLocation ] = useState(null);

  const { startTimer, restartTimer } = useInterval({
    interval: 2500,
    callbackSupplier: () => {
      // Closure: cannot use currentLocation raw, as this function only has
      // access to the current value of currentLocation, not future values.
      // Unfortunately we now have two sources of truth for currentLocation,
      // so this does not work. In this case, where the interval callback
      // relies on state that can change between renderings, a timeout is
      // the only real solution.
      let locationIndex = currentLocation;
      return () => {
        locationIndex = (locationIndex + 1) % locations.length;
        setCurrentLocation(locationIndex);
      }
    }
  });

  useEffect(() => {
    fetchData().then(data => {
      setLocations(data);
      setCurrentLocation(0);
      startTimer();
    });
    return;
  }, []); // Only runs on mount... MAAAGIC :|

  const fetchData = async () => {
    // Fake a server call.
    await pause(1000);
    return weatherData.slice();
  };

  const setLocation = index => {
    setCurrentLocation(index);
    restartTimer();
  };

  return (
    <div className="weather-widget">
      { locations.length === 0 || currentLocation === null
        ? <Loading />
        : <WeatherPanel
            locations={locations}
            currentIndex={currentLocation}
            setLocation={setLocation}
          />
      }
    </div>
  );
};

export default WeatherWidget;
