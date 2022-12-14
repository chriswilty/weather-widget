import React from 'react';

import './WeatherIcon.css';

const WeatherIcon = ({ code, description }) => (
	<div role="img" aria-label={'weather: ' + description} className="weather-icon">
		<i title={description} className={`owf owf-5x owf-${code}`} />
	</div>
);

export default WeatherIcon;
