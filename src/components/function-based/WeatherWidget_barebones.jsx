import Loading from 'src/components/Loading';
import WeatherPanel from 'src/components/WeatherPanel';
// import { fetchData } from 'src/services';

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
