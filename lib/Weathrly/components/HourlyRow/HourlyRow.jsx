import React from 'react';
import './HourlyRow.css';

function HourlyRow() {
  const tempColor = {
    color: '#D62C2C'
  }
  
  return (
    <article className="HourlyRow">
      <p className="time">1:00p</p>
      <p className="condition">Partly Cloudy</p>
      <img src="./lib/assets/thunder-icon.svg" alt="" className="hourly-icon"/>
      <p style={tempColor} className="hourly-temp">69°</p>
    </article>
  )
}

export default HourlyRow;
