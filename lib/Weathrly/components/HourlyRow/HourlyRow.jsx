import React from 'react';  // eslint-disable-line
import weatherIcons from '../../../utils/weather-icons';
import './HourlyRow.css';

function HourlyRow({ hourData, data }) {
  let accentColor = { color: '#D62C2C' };

  let icon = `./lib/assets/weather-icons/grey/${weatherIcons[hourData.icon]}.svg`;

  if (data.currentHour >= data.sunSetTime ||
      data.currentHour <= data.sunRiseTime) {
    accentColor = { color: '#7438B8' };
  }

  if (hourData.hour >= data.sunSetTime ||
      hourData.hour <= data.sunRiseTime) {
    icon = `./lib/assets/weather-icons/grey/${weatherIcons[`nt_${hourData.icon}`]}.svg`;
  }

  return (
    <article className="HourlyRow">
      <p className="time">{hourData.time}</p>
      <p className="condition">{hourData.condition}</p>
      <img src={icon} alt="" className="hourly-icon"/>
      <p style={accentColor} className="hourly-temp">{`${hourData.temp}°`}</p>
    </article>
  );
}

export default HourlyRow;
