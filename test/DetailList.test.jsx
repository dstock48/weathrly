import React from 'react';
import { shallow, mount } from 'enzyme';
import cityData from './cityDataMock';

import DetailList from '../lib/Weathrly/components/DetailList/DetailList';

describe('DetailList Component', () => {
  it('should render 7 hourly data rows if the hourly tab is selected', () => {
    const data = cityData;
    const tabName = 'Hourly'

    const DetailListComp = mount(
      <DetailList
        selectedDay={6}
        selectedMonth={'Jun'}
        getDay={() => true}
        data={data}
        tabName={tabName}
        handler={() => true}
      />
    );

    expect(DetailListComp.find('HourlyRow').length).toEqual(7);
  });

  it('should render 10 10-Day data if the 10 Day tab is selected', () => {
    const data = cityData;
    const tabName = '10 Day'

    const DetailListComp = mount(
      <DetailList
        selectedDay={6}
        selectedMonth={'Jun'}
        getDay={() => true}
        data={data}
        tabName={tabName}
        handler={() => true}
      />
    );

    expect(DetailListComp.find('TenDayRow').length).toEqual(10);
  });

  it('should render 24 Hour data if a specific day is selected', () => {
    const data = cityData;
    const tabName = '24 Hourly';
    const DetailListComp = mount(
      <DetailList
        selectedDay={6}
        selectedMonth={'Jun'}
        getDay={() => true}
        data={data}
        tabName={tabName}
        handler={() => true}
      />
    );
    expect(DetailListComp.find('HourlyRow').length).toEqual(24);
  });
});
