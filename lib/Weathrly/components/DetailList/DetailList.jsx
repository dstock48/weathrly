import React from 'react';  // eslint-disable-line
import HourlyRow from '../HourlyRow/HourlyRow';  // eslint-disable-line
import TenDayRow from '../TenDayRow/TenDayRow';  // eslint-disable-line
import './DetailList.css';

const DetailList = ({data, tabName, handler}) => {
  if (!data.sevenHourData) {
    return (
      <section className='DetailList'></section>
    );
  }

  const sevenHourData = data.sevenHourData.map((hour, i) => <HourlyRow key={Date.now() * i} hourData={hour} />);

  const tenDayData = data.tenDayData.map((hour, i) => <TenDayRow key={Date.now() * i} dayData={hour} />);

  let hourlyTabStyle = 'tab tab-active';
  let tenTabStyle = 'tab';

  if (tabName === '10 Day') {
    hourlyTabStyle = 'tab';
    tenTabStyle = 'tab tab-active';
  }

  return (
    <section className="DetailList">
      <nav className="list-tabs">
        <a onClick={handler} className={hourlyTabStyle}>Hourly</a>
        <a onClick={handler} className={tenTabStyle}>10 Day</a>
      </nav>
      <section className="list">
        { tabName === 'Hourly' ? sevenHourData : tenDayData }
      </section>
    </section>
  );
}

export default DetailList;
