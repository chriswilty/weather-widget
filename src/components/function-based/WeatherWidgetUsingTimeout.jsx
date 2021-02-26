import { useCallback, useEffect, useState } from 'react';

import Loading from 'src/components/Loading';
import WeatherPanel from 'src/components/WeatherPanel';
import { fetchData } from 'src/services';
import { debug } from 'src/utils';

import 'src/components/WeatherWidget.css';

const PAUSE_MILLIS = process.env.LOCATION_PAUSE || 3000;

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
  const [locations, setLocations] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);

  const incrementLocation = useCallback(() => {
      currentLocation !== null &&
      locations.length &&
      setCurrentLocation((currentLocation + 1) % locations.length);
    }, [currentLocation, locations]
  );

  useEffect(() => {
      const { dataPromise, cancel } = fetchData();
      dataPromise.then(jsonData => {
        setLocations(jsonData);
        setCurrentLocation(0);
      });
      return cancel;
    }, []
  );

  useEffect(() => {
      if (currentLocation !== null) {
        const timerId = setTimeout(incrementLocation, PAUSE_MILLIS);
        debug(`starting new timer ${timerId}`);
        return () => {
          debug(`clearing timer ${timerId}`);
          clearTimeout(timerId); // no-op if timer already expired
        };
      }
    }, [currentLocation, incrementLocation]
  );

  return (
    <div className="weather-widget">
      { locations.length === 0 || currentLocation === null
        ? <Loading />
        : <WeatherPanel
            locations={locations}
            currentIndex={currentLocation}
            setLocation={setCurrentLocation}
          /> }
    </div>
  );
};

export default WeatherWidget;
