import React, { Component } from 'react';  // eslint-disable-line
import AsideForecast from './components/AsideForecast/AsideForecast';  // eslint-disable-line
import ForecastDetail from './components/ForecastDetail/ForecastDetail';  // eslint-disable-line
import ErrorView from './components/ErrorView/ErrorView';  // eslint-disable-line
import WelcomeView from './components/WelcomeView/WelcomeView';  // eslint-disable-line
import dataDenver from './data.js';  // eslint-disable-line
import './Weathrly.css';
import City from '../model/City';
import key from '../utils/apiKey';

class Weathrly extends Component {
  constructor() {
    super();
    this.state = {
      welcomeMsg: false,
      isNotFound: false,
      cityData: {},
      tabName: 'Hourly',
      city: localStorage.getItem('location') || 'no location',
    };
  }

  componentDidMount() {
    this.updateWeatherData(this.state.city);
  }

  updateWeatherData(city) {
    const url = `http://api.wunderground.com/api/${key}/astronomy/conditions/hourly/forecast/forecast10day/hourly10day/geolookup/q/${city}.json`;

    if (city !== 'no location') {
      fetch(url)
      .then(res => res.json())
      .then((data) => {
        const cityData = new City(data);
        this.setState({ cityData, isNotFound: false });
      })
      .catch(() => {
        this.setState({ isNotFound: true });
        console.error('Location not found');
        localStorage.location = '';
      });
      // const cityData = new City(dataDenver);
      // this.setState({ cityData });
    }
  }

  changeTab(e) {
    const tabName = e.target.textContent;
    this.setState({ tabName });
  }

  showTwentyFourData(e) {
    const tabName = e.target;
    console.log(tabName);
    // this.setState({ tabName });
  }

  setLocation(city) {
    this.setState({ city });
    localStorage.setItem('location', city);
    this.updateWeatherData(city);
  }

  render() {
    const { cityData, tabName, isNotFound } = this.state;

    if (!localStorage.location) {
      return <WelcomeView data={cityData} handler={this.changeTab.bind(this)} locationHandler={this.setLocation.bind(this)} />;
    }

    if (isNotFound) {
      return <ErrorView data={cityData} handler={this.changeTab.bind(this)} locationHandler={this.setLocation.bind(this)} />;
    }

    return (
      <section className="Weathrly">
        <AsideForecast data={cityData} />
        <ForecastDetail data={cityData} tabName={tabName} handler={this.changeTab.bind(this)} locationHandler={this.setLocation.bind(this)} displayHandler={this.showTwentyFourData.bind(this)}/>
      </section>
    );
  }
}

export default Weathrly;
