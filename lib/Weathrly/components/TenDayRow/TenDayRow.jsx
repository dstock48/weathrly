import React from 'react';
import './TenDayRow.css';

function TenDayRow() {
  const tempColor = {
    color: '#D62C2C'
  }

  return (
    <article className="TenDayRow">
      <p className="day">Monday</p>
      <p className="condition">Partly Cloudy</p>
      <img src="./lib/assets/thunder-icon.svg" alt="" className="hourly-icon"/>
      <p style={tempColor} className="hi-low-temp">69° / 45°</p>
    </article>
  )
}

export default TenDayRow;
