function City(obj) {
  //  location info such as state (name & abrv), city, zip, lat, long, country
  this.locationInfo = obj.current_observation.display_location;
  this.city = obj.current_observation.display_location.city;
  this.curTemp = Math.ceil(obj.current_observation.temp_f);
  this.condition = obj.current_observation.weather;
  this.icon = obj.current_observation.icon;
  this.highTemp = obj.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  this.lowTemp = obj.forecast.simpleforecast.forecastday[0].low.fahrenheit;
  this.date = obj.forecast.simpleforecast.forecastday[0].date; // date object
  this.forecastDisc = obj.forecast.txt_forecast.forecastday[0].fcttext;
  //  Hourly weather data
  this.sevenHourData = obj.hourly_forecast.slice(0, 7).map(hour => {
    return {
      temp: hour.temp.english,
      icon: hour.icon,
      condition: hour.condition,
      time: hour.FCTTIME.civil,
    };
  });
  this.tenDayData = obj.forecast.simpleforecast.forecastday.map(day => {
    return {
      dayName: day.date.weekday,
      condition: day.conditions,
      icon: day.icon,
      highTemp: day.high.fahrenheit,
      lowTemp: day.low.fahrenheit,
    };
  });
}

export default City;
