import React from 'react';

import Loading from 'components/Loading';
import WeatherPanel from 'components/WeatherPanel';
import weatherData from 'data/weatherData';

import './WeatherWidget.css';

const pause = async (ms) => new Promise(resolve =>
  setTimeout(resolve, ms)
);

class WeatherWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      currentLocation: null
    };

    this.setLocation = this.setLocation.bind(this);
    this.timeoutId = null;
  }

  async componentDidMount() {
    const data = await this.fetchData();
    this.setState({
      locations: data,
      currentLocation: 0
    }, this.startTimer);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.clearTimer();
      this.startTimer();
    }
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  render() {
    const { locations, currentLocation } = this.state;

    return (
      <div className="weather-widget">
        { locations.length === 0
          ? <Loading />
          : <WeatherPanel
              locations={locations}
              currentIndex={currentLocation}
              setLocation={this.setLocation}
          />
        }
      </div>
    );
  }

  async fetchData() {
    // Fake a server call.
    await pause(1000);
    return weatherData.slice();
  }

  setLocation(index) {
    this.setState({
      currentLocation: index
    });
  }

  startTimer() {
    this.timeoutId = setTimeout(() => {
      const { currentLocation, locations } = this.state;
      const newLocation = (currentLocation + 1) % locations.length;
      this.setState({ currentLocation: newLocation });
    }, 2500);
    console.log(`starting new timer ${this.timeoutId}`);
  }

  clearTimer() {
    if (this.timeoutId !== null) {
      console.log(`clearing timer ${this.timeoutId}`);
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
}

export default WeatherWidget;
