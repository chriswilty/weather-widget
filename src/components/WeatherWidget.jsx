import { useState, useEffect } from 'react';

import Loading from 'components/Loading';

import { make as WeatherPanel } from 'components/WeatherPanel.bs';
import { fetchData } from 'services/weatherService';

import 'components/WeatherWidget.css';

const PAUSE_MILLIS = 2000;

/**
 * This widget uses setTimeout to set the weather location every N seconds.
 *
 * Whenever location is changed - either when the current timeout expires, or
 * when the user clicks a location dot - a new timeout is started to select the
 * next location in the list (or return to the start). Any existing timeout is
 * cleared first - only necessary if the user has selected location
 * manually.
 *
 * TODO Change to use setInterval, and call setCurrentLocation(prev => prev + 1)
 */
const WeatherWidget = () => {
  const [ forecastData, setForecastData ] = useState([]);
  const [ currentLocation, setCurrentLocation ] = useState(null);

  useEffect(() => {
    fetchData().then(data => {
      setForecastData(data);
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
    setCurrentLocation((currentLocation + 1) % forecastData.length);

  const logWithTime = message =>
    console.log(`${new Date().toLocaleTimeString()} ${message}`);

  return (
    <div className="weather-widget">
      { forecastData.length === 0 || currentLocation === null
        ? <Loading />
        : <WeatherPanel
            forecastData={forecastData}
            currentIndex={currentLocation}
            setLocation={setCurrentLocation}
          />
      }
    </div>
  );
};

export default WeatherWidget;
