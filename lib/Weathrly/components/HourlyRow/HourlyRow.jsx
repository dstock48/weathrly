import React from 'react';  // eslint-disable-line
import weatherIcons from '../../../utils/weather-icons';
import './HourlyRow.css';

function HourlyRow({ hourData, data }) {
  const tempColor = {
    color: '#D62C2C',
  };

  let icon = `./lib/assets/weather-icons/grey/${weatherIcons[hourData.icon]}.svg`;

  if (hourData.hour >= data.sunSetTime || hourData.hour <= data.sunRiseTime) {
    icon = `./lib/assets/weather-icons/grey/${weatherIcons[`nt_${hourData.icon}`]}.svg`;
  }

  return (
    <article className="HourlyRow">
      <p className="time">{hourData.time}</p>
      <p className="condition">{hourData.condition}</p>
      <img src={icon} alt="" className="hourly-icon"/>
      <p style={tempColor} className="hourly-temp">{`${hourData.temp}°`}</p>
    </article>
  );
}

export default HourlyRow;
