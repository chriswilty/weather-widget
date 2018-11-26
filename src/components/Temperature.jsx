import React from 'react';

import './Temperature.css';

const Temperature = ({ minimum, current, maximum }) => (
  <div className="temperature">
    <div className="min">{minimum}&deg;</div>
    <div className="current">{current}&deg;</div>
    <div className="max">{maximum}&deg;</div>
  </div>
);

export default Temperature;
