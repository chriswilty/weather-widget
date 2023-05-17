import { make as WeatherWidget } from 'components/WeatherWidget.bs';

import './App.css';

const App = () => (
  <div className="app">
    <div className="app-content">
      <WeatherWidget />
    </div>
  </div>
);

export default App;
