import { Component } from 'react';
import Loading from 'src/components/Loading';
import WeatherPanel from 'src/components/WeatherPanel';
import { fetchData } from 'src/services';
import { debug } from 'src/utils';

import 'src/components/WeatherWidget.css';

export default class WeatherWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      currentLocation: null
    };

    this.setLocation = this.setLocation.bind(this);
    this.timeoutId = null;
    this.pauseMillis = process.env.LOCATION_PAUSE || 3000;
  }

  async componentDidMount() {
    const { dataPromise } = fetchData();
    const data = await dataPromise;
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
      }, this.pauseMillis
    );
    debug(`starting new timer ${this.timeoutId}`);
  }

  clearTimer() {
    if (this.timeoutId !== null) {
      debug(`clearing timer ${this.timeoutId}`);
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
}
