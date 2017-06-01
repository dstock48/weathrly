import React from 'react';  // eslint-disable-line
import HourlyRow from '../HourlyRow/HourlyRow';  // eslint-disable-line
import TenDayRow from '../TenDayRow/TenDayRow';  // eslint-disable-line
import './DetailList.css';

const DetailList = ({ data, tabName, handler }) => {
  if (!data.sevenHourData) {
    return (
      <section className='DetailList'></section>
    );
  }

  const sevenHourData = data.sevenHourData.map((hour, i) => <HourlyRow key={Date.now() * i} hourData={hour} data={data} />);

  const tenDayData = data.tenDayData.map((hour, i) => <TenDayRow key={Date.now() * i} dayData={hour} data={data} />);

  let borderColor = {
    borderColor: '#D62C2C',
  };

  if (data.currentHour >= data.sunSetTime || data.currentHour <= data.sunRiseTime) {
    borderColor = {
      borderColor: '#7438B8',
    };
  }

  let hourlyTab = <a style={borderColor} onClick={handler} className="tab tab-active">Hourly</a>;
  let tenDayTab = <a onClick={handler} className="tab">10 Day</a>;

  if (tabName === '10 Day') {
    hourlyTab = <a onClick={handler} className="tab">Hourly</a>;
    tenDayTab = <a style={borderColor} onClick={handler} className="tab tab-active">10 Day</a>;
  }

  return (
    <section className="DetailList">
      <nav className="list-tabs">
        {hourlyTab}
        {tenDayTab}
      </nav>
      <section className="list">
        { tabName === 'Hourly' ? sevenHourData : tenDayData }
      </section>
    </section>
  );
};

export default DetailList;
