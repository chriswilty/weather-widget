import './Temperature.scss';

const Temperature = ({ minimum, current, maximum }) => (
  <div className="temperature" title="temperature">
    <div className="min" title="minimum">{minimum}&deg;</div>
    <div className="current" title="current">{current}&deg;</div>
    <div className="max" title="maximum">{maximum}&deg;</div>
  </div>
);

export default Temperature;
