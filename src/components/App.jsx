// import WeatherWidget from 'src/components/class-based/WeatherWidget';
import WeatherWidget from 'src/components/function-based/WeatherWidgetUsingTimeout';
// import WeatherWidget from 'src/components/function-based/WeatherWidgetUsingInterval';

import './App.css';

const App = () => (
  <div className="app">
    <div className="app-content">
      <WeatherWidget />
    </div>
  </div>
);

export default App;
