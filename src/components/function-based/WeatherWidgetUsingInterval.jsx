import { useEffect, useState } from 'react';

import Loading from 'components/Loading';
import WeatherPanel from 'components/WeatherPanel';
import { useIntervalCount } from 'hooks';
import { fetchData } from 'services/weatherService';

import 'components/WeatherWidget.css';

const PAUSE_MILLIS = process.env.REACT_APP_PAUSE || 3000;
/**
 * This version of the widget uses setInterval to set the weather location every
 * N seconds.
 *
 * Logic for selecting location at an interval is provided in custom hooks - see
 * hooks/interval. Note that the callback passed to setInterval cannot access
 * "future" state values from a useState hook (only the "current" state value is
 * accessible, even in a closure), instead we must use a ref hook to store the
 * location value, which we CAN use in a callback to retrieve the current value,
 * as Refs are guaranteed to persist for the lifetime of a component.
 * See hooks/rolloverCount.
 *
 * However, by design useRefs do not trigger updates, so we need to force an
 * update with some hooks trickery - see hooks/useForceUpdate.
 *
 * As you will gather, the logic in this version of the widget is far more
 * complex than the one using setTimeout. While it remains as an example of how
 * to achieve this behaviour using setInterval, your fellow developers will
 * thank you for avoiding setInterval when needing to access application state!
 */
const WeatherWidget = () => {
  const [locations, setLocations] = useState([]);
  const [currentLocation, initialise, setLocation] = useIntervalCount(PAUSE_MILLIS);

  useEffect(() => {
    fetchData().then(jsonData => {
      setLocations(jsonData);
      initialise(jsonData.length);
    }); // would need error handling here, if firing real request
  }, []);

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
