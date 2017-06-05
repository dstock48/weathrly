import React from 'react';
import { mount } from 'enzyme';
import cityData from './cityDataMock';

import HourlyRow from '../lib/Weathrly/components/HourlyRow/HourlyRow';

describe('HourlyRow Component', () => {
  it('should render to the page data passed as props', () => {
    const data = cityData;
    const hourData = cityData.sevenHourData[0];
    const HourlyRowComp = mount(<HourlyRow key={1} hourData={hourData} data={data} />);

    expect(HourlyRowComp.contains(<p className="time">4:00 PM</p>)).toEqual(true);
    expect(HourlyRowComp.contains(<p className="condition">Clear</p>)).toEqual(true);
    expect(HourlyRowComp.find('.hourly-icon').prop('src')).toEqual('./lib/assets/weather-icons/grey/clear.svg');
    expect(HourlyRowComp.find('.hourly-temp').prop('children')).toEqual('104°');
  });

  it('should render night accent color correclty depending on sunset time', () => {
    const data = cityData;
    data.currentHour = 20;
    const hourData = cityData.sevenHourData[0];
    const HourlyRowComp = mount(<HourlyRow key={1} hourData={hourData} data={data} />);

    expect(HourlyRowComp.find('.hourly-temp').prop('style').color).toEqual('#A332D6');
  });
});
