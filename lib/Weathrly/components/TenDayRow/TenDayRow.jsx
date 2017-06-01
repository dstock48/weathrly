import React from 'react';  // eslint-disable-line
import weatherIcons from '../../../utils/weather-icons';
import './TenDayRow.css';

function TenDayRow({ dayData, data }) {
  let accentColor = { color: '#D62C2C' };

  if (data.currentHour >= data.sunSetTime || data.currentHour <= data.sunRiseTime) {
    accentColor = { color: '#7438B8' };
  }

  const icon = `./lib/assets/weather-icons/grey/${weatherIcons[dayData.icon]}.svg`;
  const highLow = `${dayData.highTemp}° / ${dayData.lowTemp}°`;

  return (
    <article className="TenDayRow">
      <p className="day">{dayData.dayName}</p>
      <p className="condition">{dayData.condition}</p>
      <img src={icon} alt="" className="hourly-icon"/>
      <p style={accentColor} className="hi-low-temp">{highLow}</p>
    </article>
  );
}

export default TenDayRow;
