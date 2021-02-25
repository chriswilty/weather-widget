import styled from 'styled-components';

import compassIcon from 'src/assets/images/compass_white.png';

const Units = styled.span`
  font-size: 12px;
`;

const WindSpeed = styled(({ className, speed }) => (
  <div className={className} title="speed">
    {speed}
    <Units>m/s</Units>
  </div>
))`
  font-size: 24px;
`;

const WindIcon = styled.i`
  display: inline-block;
  margin-right: 10px;
  width: 24px;
  height: 24px;
  background-image: url(${compassIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  transform: rotate(${props => props.degrees}deg);
`;

const Wind = ({ className, speed, fromDegrees }) => {
  const normalisedDegrees = fromDegrees === 360 ? 0 : fromDegrees;
  return (
    <div className={className} title="wind">
      <WindIcon
        degrees={normalisedDegrees}
        title={`direction ${normalisedDegrees} degrees`}
      />
      <WindSpeed speed={speed} />
    </div>
  );
};

export default styled(Wind)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
