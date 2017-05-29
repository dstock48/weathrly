import React from 'react'; // eslint-disable-line
import './AsideForecast.css';


function AsideForecast() {
  // const cityState = `${props.city}, ${props.state}`;
  // const date =
  // const
  const highLow = `${70}° / ${50}°`;

  return (
    <aside className='AsideForecast'>
      <div className="top">
        <h1 className="city">Denver, CO</h1>
        <h2 className="date">Sun, May 28 2017</h2>
      </div>

      <div className="middle">
        <p className="current-temp">69<span className="deg">&deg;</span></p>
        <img className="weather-icon" src="./lib/assets/thunder-icon.svg" alt="weather condition icon"/>
        <p className="weather-condition">Thunderstorm</p>
        <p className="hi-low">{highLow}</p>
      </div>

      <div className="bottom">
        <p className="weather-summary">Windy, chance of a few late night showers. Lows overnight in the mid 50s.</p>
      </div>
    </aside>
  );
}

export default AsideForecast;
