import React from 'react';

import './Temperature.css';

const Temperature = ({ min, current, max }) => (
  <div className="temperature">
    <div className="min">{min}&deg;</div>
    <div className="current">{current}&deg;</div>
    <div className="max">{max}&deg;</div>
  </div>
);

export default Temperature;
