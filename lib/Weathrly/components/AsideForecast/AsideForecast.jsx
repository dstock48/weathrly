import React from 'react'; // eslint-disable-line
import weatherIcons from '../../../utils/weather-icons';
import './AsideForecast.css';

function AsideForecast({ data }) {
  if (!data.locationInfo) {
    return (
      <section className='AsideForecast'></section>
    );
  }

  const highLow = `${data.highTemp}° / ${data.lowTemp}°`;

  let icon = `./lib/assets/weather-icons/black/${weatherIcons[data.icon]}.svg`;
  if (data.currentHour >= data.sunSetTime || data.currentHour <= data.sunRiseTime) {
    icon = `./lib/assets/weather-icons/black/${weatherIcons[`nt_${data.icon}`]}.svg`;
  }

  const { day, monthname_short: month, weekday_short: wkday, year } = data.date;
  const fullDate = `${wkday}, ${month} ${day} ${year}`;

  return (
    <aside className='AsideForecast'>
      <div className="top">
        <h1 className="city">{ data.locationInfo.full }</h1>
        <h2 className="date">{ fullDate }</h2>
      </div>
      <div className="middle">
        <p className="current-temp">{ data.curTemp }<span className="deg">&deg;</span></p>
        <img className="weather-icon" src={ icon } alt="weather condition icon"/>
        <p className="weather-condition">{ data.condition }</p>
        <p className="hi-low">{highLow}</p>
      </div>
      <div className="bottom">
        <p className="weather-summary">{ data.forecastDisc }</p>
      </div>
    </aside>
  );
}

export default AsideForecast;
