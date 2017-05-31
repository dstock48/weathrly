import React, { Component } from 'react';  // eslint-disable-line
import AsideForecast from './components/AsideForecast/AsideForecast';  // eslint-disable-line
import ForecastDetail from './components/ForecastDetail/ForecastDetail';  // eslint-disable-line
import dataDenver from './data.js';
import './Weathrly.css';
import City from '../model/City';

class Weathrly extends Component {
  constructor() {
    super();
    this.state = {
      cityData: {},
      tabName: 'Hourly',
    };
  }

  componentDidMount() {
    // fetch('http://api.wunderground.com/api/35bf11f478a3a114/conditions/hourly/forecast/forecast10day/hourly10day/q/CO/Denver.json')
    // .then(res => res.json())
    // .then((data) => {
    //   const cityData = new City(data);
    //   this.setState({ cityData });
    // });
    const cityData = new City(dataDenver);
    this.setState({ cityData });
  }

  changeTab(e) {
    const tabName = e.target.textContent;
    this.setState({ tabName });
  }

  render() {
    const { cityData, tabName } = this.state;

    return (
      <section className="Weathrly">
        <AsideForecast data={cityData} />
        <ForecastDetail data={cityData} tabName={tabName} handler={this.changeTab.bind(this)} />
      </section>
    );
  }
}

export default Weathrly;
