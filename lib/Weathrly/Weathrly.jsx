import React, { Component } from 'react';
import AsideForecast from './components/AsideForecast/AsideForecast';
import './Weathrly.css';

class Weathrly extends Component {
  render() {
    return (
      <section className="Weathrly">
        <AsideForecast />
      </section>
    );
  }
}

export default Weathrly;
