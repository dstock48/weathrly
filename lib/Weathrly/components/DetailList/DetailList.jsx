import React from 'react';
import HourlyRow from '../HourlyRow/HourlyRow';
import TenDayRow from '../TenDayRow/TenDayRow';
import './DetailList.css';
import colorCondition from '../../../utils/colorCondition';

const DetailList = ({ data, tabName, handler, getDay, selectedDay, selectedMonth }) => {
  if (!data.sevenHourData) {
    return (
      <section className="DetailList"></section>
    );
  }

  const accentColor = colorCondition[data.condition].accentColor;

  const sevenHourData = data.sevenHourData.map((hour, i) => <HourlyRow key={Date.now() * i} hourData={hour} data={data} />);
  const tenDayData = data.tenDayData.map((hour, i) => <TenDayRow getDay={getDay} key={Date.now() * i} dayData={hour} data={data} />);
  const twentyFourData = data.twentyFourData
    .filter(e => e.day === selectedDay)
    .map((hour, i) => <HourlyRow key={Date.now() * i} hourData={hour} data={data} />);

  let borderColor = { borderColor: accentColor };

  if (data.currentHour >= data.sunSetTime || data.currentHour <= data.sunRiseTime) {
    borderColor = { borderColor: '#7438B8' };
  }

  let hourlyTab = <a key="tab-1" style={borderColor} onClick={handler} className="tab tab-active">Hourly</a>;
  let tenDayTab = <a key="tab-2" onClick={handler} className="tab">10 Day</a>;
  let twentyFourTab = <a key="tab-3" className="tab">{selectedMonth} {selectedDay}</a>;

  if (tabName === '10 Day') {
    hourlyTab = <a key="tab-1" onClick={handler} className="tab">Hourly</a>;
    tenDayTab = <a key="tab-2" style={borderColor} onClick={handler} className="tab tab-active">10 Day</a>;
  }

  if (tabName === '24 Hourly') {
    hourlyTab = <a key="tab-1" onClick={handler} className="tab">Hourly</a>;
    tenDayTab = <a key="tab-2" onClick={handler} className="tab">10 Day</a>;
    twentyFourTab = <a key="tab-3" style={borderColor} className="tab tab-active">{selectedMonth} {selectedDay}</a>;
  }

  let tabs;
  let dataView;

  switch (tabName) {
    case 'Hourly':
      dataView = sevenHourData;
      tabs = [hourlyTab, tenDayTab];
      break;
    case '10 Day':
      dataView = tenDayData;
      tabs = [hourlyTab, tenDayTab];
      break;
    case '24 Hourly':
      dataView = twentyFourData;
      tabs = [hourlyTab, tenDayTab, twentyFourTab];
      break;
    default:
  }


  return (
    <section className="DetailList">
      <nav className="list-tabs">
        {tabs}
      </nav>
      <section className="list">
        {dataView}
      </section>
    </section>
  );
};

export default DetailList;
