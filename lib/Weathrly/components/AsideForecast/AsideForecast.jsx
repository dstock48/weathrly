import React from 'react';
import weatherIcons from '../../../utils/weather-icons';
import colorCondition from '../../../utils/colorCondition';
import './AsideForecast.css';

function AsideForecast({ data }) {
  if (!data.locationInfo) {
    return (
      <section className="AsideForecast"></section>
    );
  }

  if (!data.condition) {
    data.condition = 'Unknown';
  }

  const highLow = `${data.highTemp}° / ${data.lowTemp}°`;
  const iconColor = colorCondition[data.condition].iconColor;
  let backgroundGradient = colorCondition[data.condition].style;
  let icon = `./lib/assets/weather-icons/${iconColor}/${weatherIcons[data.icon]}.svg`;

  if (data.icon === 'clear' && parseInt(data.curTemp, 10) < 50) {
    backgroundGradient = colorCondition['Partly Cloudy'].style;
  }

  if (data.currentHour >= data.sunSetTime || data.currentHour <= data.sunRiseTime) {
    icon = `./lib/assets/weather-icons/white/${weatherIcons[`nt_${data.icon}`]}.svg`;
    backgroundGradient = colorCondition.night.style;
  }

  return (
    <aside className="AsideForecast" style={backgroundGradient}>
      <div className="top">
        <h1 className="city">{data.locationInfo.full}</h1>
        <h2 className="current-time">{data.lastUpdateTime}</h2>
      </div>
      <div className="middle">
        <p className="current-temp">{data.curTemp}<span className="deg">&deg;</span></p>
        <img className="weather-icon" src={icon} alt="weather condition icon" />
        <p className="weather-condition">{data.condition}</p>
        <p className="hi-low">{highLow}</p>
      </div>
      <div className="bottom">
        <p className="weather-summary">{data.forecastDisc}</p>
      </div>
    </aside>
  );
}

export default AsideForecast;
