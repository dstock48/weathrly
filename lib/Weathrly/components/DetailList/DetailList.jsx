import React, { Component } from 'react';  // eslint-disable-line
import HourlyRow from '../HourlyRow/HourlyRow';  // eslint-disable-line
import TenDayRow from '../TenDayRow/TenDayRow';  // eslint-disable-line
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
          <TenDayRow />
          <TenDayRow />
          <TenDayRow />
          <TenDayRow />
        </section>
      </section>
    );
  }
}

export default DetailList;
