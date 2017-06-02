import React, { Component } from 'react';  // eslint-disable-line
import AsideForecast from './components/AsideForecast/AsideForecast';  // eslint-disable-line
import ForecastDetail from './components/ForecastDetail/ForecastDetail';  // eslint-disable-line
import dataDenver from './data.js';  // eslint-disable-line
import './Weathrly.css';
import City from '../model/City';
import key from '../utils/apiKey';

class Weathrly extends Component {
  constructor() {
    super();
    this.state = {
      isNotFound: false,
      cityData: {},
      tabName: 'Hourly',
      city: 'autoip',
      // city: 'paris france',
    };
  }

  componentDidMount() {
    this.updateWeatherData(this.state.city);
  }

  updateWeatherData(city) {
    const url = `http://api.wunderground.com/api/${key}/astronomy/conditions/hourly/forecast/forecast10day/hourly10day/geolookup/q/${city}.json`;

    fetch(url)
    .then(res => res.json())
    .then((data) => {
      const cityData = new City(data);
      this.setState({ cityData, isNotFound: false });
    })
    .catch(() => this.setState({
      isNotFound: true,
    }));

    // const cityData = new City(dataDenver);
    // this.setState({ cityData })
  }

  changeTab(e) {
    const tabName = e.target.textContent;
    this.setState({ tabName });
  }

  setLocation(inputValue) {
    this.setState({
      city: inputValue,
    });
    this.updateWeatherData(inputValue);
  }

  render() {
    const { cityData, tabName } = this.state;
    if (this.state.isNotFound) {
      return <ForecastDetail data={cityData} tabName={tabName} handler={this.changeTab.bind(this)} locationHandler={this.setLocation.bind(this)} />
    }
    return (
      <section className="Weathrly">
        <AsideForecast data={cityData} />
        <ForecastDetail data={cityData} tabName={tabName} handler={this.changeTab.bind(this)} locationHandler={this.setLocation.bind(this)} />
      </section>
    );
  }
}

export default Weathrly;
