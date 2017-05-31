import React from 'react'; // eslint-disable-line
import weatherIcons from '../../../utils/weather-icons';
import './AsideForecast.css';

// BUG: undefinde data when loade for a second
// BUG: nested fetch data doesnt work

function AsideForecast({ data }) {

  const highLow = `${data.highTemp}° / ${data.lowTemp}°`;
  const icon = `./lib/assets/weather-icons/black/${weatherIcons[data.icon]}.svg`;
  // console.log(weatherIcons[data.icon]);
  // console.log(data.locationInfo.city);
  // console.log(data.current_observation);

  return (
    <aside className='AsideForecast'>
      <div className="top">
        <h1 className="city"></h1>
        <h2 className="date">Sun, May 28 2017</h2>
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
