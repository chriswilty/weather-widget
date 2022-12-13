import React from 'react';

import './Temperature.css';

const Temperature = ({ minimum, current, maximum }) => (
  <div role="region" aria-label="temperature" className="temperature">
    <div title="minimum &deg;" className="min">{minimum}</div>
    <div title="current" className="current">{current}&deg;</div>
    <div title="maximum &deg;" className="max">{maximum}</div>
  </div>
);

export default Temperature;
