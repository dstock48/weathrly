import React from 'react';
import weatherIcons from '../../../utils/weather-icons';
import './HourlyRow.css';

function HourlyRow({hourData}) {
  const tempColor = {
    color: '#D62C2C'
  }

  const icon = `./lib/assets/weather-icons/black/${weatherIcons[hourData.icon]}.svg`;

  return (
    <article className="HourlyRow">
      <p className="time">{hourData.time}</p>
      <p className="condition">{hourData.condition}</p>
      <img src={icon} alt="" className="hourly-icon"/>
      <p style={tempColor} className="hourly-temp">{`${hourData.temp}°`}</p>
    </article>
  )
}

export default HourlyRow;
