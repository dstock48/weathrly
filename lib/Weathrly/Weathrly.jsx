import React, { Component } from 'react';  // eslint-disable-line
import AsideForecast from './components/AsideForecast/AsideForecast';  // eslint-disable-line
import ForecastDetail from './components/ForecastDetail/ForecastDetail';  // eslint-disable-line
import dataDenver from './data.js';  // eslint-disable-line
import './Weathrly.css';
import City from '../model/City';

class Weathrly extends Component {
  constructor() {
    super();
    this.state = {
      cityData: {},
      tabName: 'Hourly',
      city: 'autoip',
      // city: 'paris france',
      inputValue: '',
    };
  }

  componentDidMount() {
    this.updateWeatherData(this.state.city);
  }

  updateWeatherData(city) {
    const url = `http://api.wunderground.com/api/35bf11f478a3a114/astronomy/conditions/hourly/forecast/forecast10day/hourly10day/geolookup/q/${city}.json`;

    fetch(url)
    .then(res => res.json())
    .then((data) => {
      const cityData = new City(data);
      this.setState({ cityData });
    });
  }

  changeTab(e) {
    const tabName = e.target.textContent;
    this.setState({ tabName });
  }

  getLocationInput(e) {
    if (e.key === 'Enter') {
      this.setLocation();
    }
    this.setState({
      inputValue: e.target.value,
    });
  }

  setLocation() {
    const value = this.state.inputValue;
    this.setState({
      city: value,
    });
    this.updateWeatherData(value);
  }

  render() {
    const { cityData, tabName } = this.state;

    const handleLocation = {
      input: this.getLocationInput.bind(this),
      change: this.setLocation.bind(this),
    };

    return (
      <section className="Weathrly">
        <AsideForecast data={cityData} />
        <ForecastDetail data={cityData} tabName={tabName} handler={this.changeTab.bind(this)} locationHandler={handleLocation} input={this.state.inputValue}/>
      </section>
    );
  }
}

export default Weathrly;
