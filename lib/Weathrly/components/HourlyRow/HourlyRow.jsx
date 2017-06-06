import React from 'react';
import weatherIcons from '../../../utils/weather-icons';
import colorCondition from '../../../utils/colorCondition';
import { getAccentColor, getIcon } from '../../../utils/helperFunctions';
import './HourlyRow.css';

function HourlyRow({ hourData, data }) {
  const accentColor = colorCondition[data.condition].accentColor;
  const tempColor = getAccentColor(accentColor, data);
  const icon = getIcon(weatherIcons, hourData, data);

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
