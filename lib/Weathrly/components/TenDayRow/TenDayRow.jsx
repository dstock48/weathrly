import React from 'react';
import weatherIcons from '../../../utils/weather-icons';
import colorCondition from '../../../utils/colorCondition';
import { getAccentColor, getIcon } from '../../../utils/helperFunctions';
import './TenDayRow.css';

function TenDayRow({ dayData, data, getDay }) {
  const accentColor = colorCondition[data.condition].accentColor;
  const tempColor = getAccentColor(accentColor, data);
  const icon = getIcon(weatherIcons, dayData, data);
  const highLow = `${dayData.highTemp}° / ${dayData.lowTemp}°`;
  const dayMonth = `${dayData.month} ${dayData.day}`;

  return (
    <article onClick={() => getDay(dayData)} className="TenDayRow">
      <p className="month-date">{dayMonth}</p>
      <p className="day">{dayData.dayName}</p>
      <p className="condition">{dayData.condition}</p>
      <div className="row-sec">
        <img src={icon} alt="" className="hourly-icon" />
        <p style={tempColor} className="hi-low-temp">{highLow}</p>
      </div>
    </article>
  );
}

export default TenDayRow;
