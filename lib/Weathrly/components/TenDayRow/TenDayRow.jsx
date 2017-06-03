import React from 'react';  // eslint-disable-line
import weatherIcons from '../../../utils/weather-icons';
import './TenDayRow.css';
import colorCondition from '../../../utils/colorCondition';

function TenDayRow({ dayData, data }) {
  const accentColor = colorCondition[data.condition].accentColor;
  let tempColor = { color: accentColor };
  if (data.currentHour >= data.sunSetTime || data.currentHour <= data.sunRiseTime) {
    tempColor = { color: '#A332D6' };
  }

  const icon = `./lib/assets/weather-icons/grey/${weatherIcons[dayData.icon]}.svg`;
  const highLow = `${dayData.highTemp}° / ${dayData.lowTemp}°`;
  const dayMonth = `${dayData.month} / ${dayData.day}`;

  return (
    <article className="TenDayRow">
      <p className="day">{dayMonth} {dayData.dayName}</p>
      <p className="condition">{dayData.condition}</p>
      <img src={icon} alt="" className="hourly-icon"/>
      <p style={tempColor} className="hi-low-temp">{highLow}</p>
    </article>
  );
}

export default TenDayRow;
