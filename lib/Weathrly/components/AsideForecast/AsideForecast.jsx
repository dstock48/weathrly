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

  let backgroundGradient = {
    background: 'linear-gradient(#E86868, #F3D766)',
  };

  let icon = `./lib/assets/weather-icons/black/${weatherIcons[data.icon]}.svg`;
  if (data.currentHour >= data.sunSetTime || data.currentHour <= data.sunRiseTime) {
    icon = `./lib/assets/weather-icons/white/${weatherIcons[`nt_${data.icon}`]}.svg`;
    backgroundGradient = {
      color: '#fff',
      background: 'linear-gradient(#B130DE, #463E9C)',
    };
  }

  return (
    <aside className='AsideForecast' style={backgroundGradient}>
      <div className="top">
        <h1 className="city">{ data.locationInfo.full }</h1>
        <h2 className="current-time">{ data.lastUpdateTime }</h2>
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
