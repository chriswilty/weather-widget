import styled from 'styled-components';

import Dots from 'src/components/Dots';
import Temperature from 'src/components/Temperature';
import Wind from 'src/components/Wind';

import 'src/styles/icons/owfont-regular.css';

const Location = styled.div`
  font-size: 32px;
`;

// Note these icons are not accessibility-friendly, as their names are numeric codes.
// TODO Include weather descriptor in data, and set as title attribute.
const WeatherIcon = styled(({ className, code, description }) => (
  <div className={className}>
    <i title={description} className={`owf owf-5x owf-${code}`} />
  </div>
))`
  display: flex;
  flex-direction: row;
  font-size: 24px;
`;

const WeatherPanel = ({ className, locations, currentIndex, setLocation }) => {
  const { location, weather: { code, description }, temperature, wind } = locations[currentIndex];

  return (
    <div className={className} title="weather today">
      <Location title="location">{location}</Location>
      <Wind {...wind} />
      <WeatherIcon {...{ code, description }} />
      <Temperature {...temperature} />
      <Dots
        locations={locations}
        currentIndex={currentIndex}
        onSelected={setLocation}
      />
    </div>
  );
};

export default styled(WeatherPanel)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
