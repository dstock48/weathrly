export function getRandomKey() {
  return Math.ceil(Date.now() * Math.random());
}

export function getAccentColor(accent, data) {
  if (data.currentHour >= data.sunSetTime || data.currentHour <= data.sunRiseTime) {
    return { color: '#A332D6' };
  }
  return { color: accent };
}

export function getIcon(weatherIcons, minData, data) {
  if (minData.hour >= data.sunSetTime || minData.hour <= data.sunRiseTime) {
    return `./lib/assets/weather-icons/grey/${weatherIcons[`nt_${minData.icon}`]}.svg`;
  }
  return `./lib/assets/weather-icons/grey/${weatherIcons[minData.icon]}.svg`;
}
