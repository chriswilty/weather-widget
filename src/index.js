import React from 'react';
import ReactDOM from 'react-dom';

import { make as App } from 'components/App.bs';

import './index.css';

ReactDOM.render(
	<React.StrictMode><App /></React.StrictMode>,
	document.getElementById('root')
);
