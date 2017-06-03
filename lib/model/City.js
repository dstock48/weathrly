function City(obj) {
  //  location info such as state (name & abrv), city, zip, lat, long, country
  this.sunSetTime = parseInt(obj.moon_phase.sunset.hour, 10);
  this.sunRiseTime = parseInt(obj.moon_phase.sunrise.hour, 10);
  this.currentHour = parseInt(obj.hourly_forecast[0].FCTTIME.hour, 10) - 1;
  this.locationInfo = obj.current_observation.display_location;
  this.curTemp = Math.round(obj.current_observation.temp_f);
  this.condition = obj.current_observation.weather;
  this.icon = obj.current_observation.icon;
  this.lastUpdateTime = obj.current_observation.observation_time;
  this.highTemp = obj.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  this.lowTemp = obj.forecast.simpleforecast.forecastday[0].low.fahrenheit;
  this.date = obj.forecast.simpleforecast.forecastday[0].date; // date object
  this.forecastDisc = obj.forecast.txt_forecast.forecastday[0].fcttext;
  //  Hourly weather data
  this.sevenHourData = obj.hourly_forecast.slice(0, 7).map((hour) => {
    return {
      temp: hour.temp.english,
      icon: hour.icon,
      condition: hour.condition,
      time: hour.FCTTIME.civil,
      hour: parseInt(hour.FCTTIME.hour, 10),
    };
  });
  this.tenDayData = obj.forecast.simpleforecast.forecastday.map((day) => {
    return {
      day: day.date.day,
      month: day.date.month,
      dayName: day.date.weekday,
      condition: day.conditions,
      icon: day.icon,
      highTemp: day.high.fahrenheit,
      lowTemp: day.low.fahrenheit,
      hourlyData: obj.hourly_forecast,
    };
  });
}

export default City;
