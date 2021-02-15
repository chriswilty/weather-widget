import { useState, useEffect } from 'react';

import Loading from 'components/Loading';
import WeatherPanel from 'components/WeatherPanel';
import { fetchData } from 'services/weatherService';

import 'components/WeatherWidget.css';

const PAUSE_MILLIS = process.env.REACT_APP_PAUSE || 3000;

/**
 * This version of the widget uses setTimeout to set the weather location every
 * N seconds, much like in the class version.
 *
 * Whenever location is changed - either when the current timeout expires, or
 * when the user clicks a location dot - a new timeout is started to select the
 * next location in the list (or return to the start). Any existing timeout is
 * cleared first - only necessary if the user has selected location
 * manually.
 *
 * Note how much simpler this widget is, compared with the flavour that uses
 * setInterval with all those hooks... Simpler is usually better!
 */
const WeatherWidget = () => {
  const [ locations, setLocations ] = useState([]);
  const [ currentLocation, setCurrentLocation ] = useState(null);

  useEffect(() => {
    fetchData().then(data => {
      setLocations(data);
      setCurrentLocation(0);
    });
  }, []);

  useEffect(() => {
      const timerId = setTimeout(incrementLocation, PAUSE_MILLIS);
      logWithTime(`starting new timer ${timerId}`);
      return () => {
        logWithTime(`clearing timer ${timerId}`);
        clearTimeout(timerId); // no-op if timer already expired
      }
    },
    [currentLocation]
  );

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
