import React from 'react';
import { mount } from 'enzyme';
import cityData from './cityDataMock';

import AsideForecast from '../lib/Weathrly/components/AsideForecast/AsideForecast';

describe('AsideForecast Component', () => {
  it('should render data passed as a prop', () => {
    const AsideForecastComp = mount(<AsideForecast data={cityData} />);
    const city = AsideForecastComp.find('.city').prop('children');
    const currentTime = AsideForecastComp.find('.current-time').prop('children');
    const currentTemp = AsideForecastComp.find('.current-temp').prop('children')[0];
    const conditionIcon = AsideForecastComp.find('.weather-icon').prop('src');
    const condition = AsideForecastComp.find('.weather-condition').prop('children');
    const highLow = AsideForecastComp.find('.hi-low').prop('children');
    const summary = AsideForecastComp.find('.weather-summary').prop('children');

    expect(city).toEqual('Tucson, AZ');
    expect(currentTime).toEqual('Last Updated on June 5, 3:48 PM MST');
    expect(currentTemp).toEqual(102);
    expect(condition).toEqual('Clear');
    expect(conditionIcon).toEqual('./lib/assets/weather-icons/black/clear.svg');
    expect(highLow).toEqual('102° / 75°');
    expect(summary).toEqual('Clear. Lows overnight in the mid 70s.');
  });
});
