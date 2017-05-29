import React, { Component } from 'react';
import HourlyRow from '../HourlyRow/HourlyRow';
import './DetailList.css';

class DetailList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="DetailList">
        <nav className="list-tabs">
          <a className="tab tab-active">Hourly</a>
          <a className="tab">10 Day</a>
        </nav>
        <section className="list">
          <HourlyRow />
          <HourlyRow />
          <HourlyRow />
          <HourlyRow />
          <HourlyRow />
          <HourlyRow />
          <HourlyRow />
        </section>
      </section>
    )
  }
}

export default DetailList;
