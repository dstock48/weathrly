import React, { Component } from 'react';
import AsideForecast from './components/AsideForecast/AsideForecast';
import ForecastDetail from './components/ForecastDetail/ForecastDetail';
import './Weathrly.css';

class Weathrly extends Component {
  render() {
    return (
      <section className="Weathrly">
        <AsideForecast />
        <ForecastDetail />
      </section>
    );
  }
}

export default Weathrly;
