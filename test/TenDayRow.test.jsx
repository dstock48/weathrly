import React from 'react';
import { shallow, mount } from 'enzyme';
import cityData from './cityDataMock';

import TenDayRow from '../lib/Weathrly/components/TenDayRow/TenDayRow';

describe('TenDayRow Component', () => {
  it('should render the correct data to the page that was passed in as props', () => {
    const data = cityData;
    const dayData = cityData.tenDayData[0];
    const TenDayRowComp = shallow(<TenDayRow key={1} dayData={dayData} data={data} />);

    expect(TenDayRowComp.contains(<p className="month-date">Jun 5</p>)).toEqual(true);
    expect(TenDayRowComp.contains(<p className="day">Monday</p>)).toEqual(true);
    expect(TenDayRowComp.find('.hourly-icon').prop('src')).toEqual('./lib/assets/weather-icons/grey/clear.svg');
    expect(TenDayRowComp.find('.hi-low-temp').prop('children')).toEqual('102° / 75°');
  });

  it('should render night accent color correclty depending on sunset time', () => {
    const data = cityData;
    const dayData = cityData.tenDayData[0];

    data.currentHour = 11; // 11:00am
    let TenDayRowComp = mount(<TenDayRow key={1} dayData={dayData} data={data} />);

    expect(TenDayRowComp.find('.hi-low-temp').prop('style').color).toEqual('#E86868');

    data.currentHour = 20; // 8:00pm
    TenDayRowComp = mount(<TenDayRow key={1} dayData={dayData} data={data} />);

    expect(TenDayRowComp.find('.hi-low-temp').prop('style').color).toEqual('#A332D6');
  });
});
