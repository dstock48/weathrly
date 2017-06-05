import React from 'react';
import weatherIcons from '../../../utils/weather-icons';
import './HourlyRow.css';
import colorCondition from '../../../utils/colorCondition';

function HourlyRow({ hourData, data }) {
  const accentColor = colorCondition[data.condition].accentColor;
  let icon = `./lib/assets/weather-icons/grey/${weatherIcons[hourData.icon]}.svg`;
  let tempColor = { color: accentColor };

  if (data.currentHour >= data.sunSetTime ||
      data.currentHour <= data.sunRiseTime) {
    tempColor = { color: '#A332D6' };
  }

  if (hourData.hour >= data.sunSetTime ||
      hourData.hour <= data.sunRiseTime) {
    icon = `./lib/assets/weather-icons/grey/${weatherIcons[`nt_${hourData.icon}`]}.svg`;
  }

  return (
    <article className="HourlyRow">
      <p className="time">{hourData.time}</p>
      <p className="condition">{hourData.condition}</p>
      <div className="row-sec">
        <img src={icon} alt="" className="hourly-icon" />
        <p style={tempColor} className="hourly-temp">{`${hourData.temp}°`}</p>
      </div>
    </article>
  );
}

export default HourlyRow;
