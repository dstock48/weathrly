import React from 'react';
import { shallow, mount } from 'enzyme';

import AsideForecast from '../lib/Weathrly/components/AsideForecast/AsideForecast';

describe('AsideForecast Component', () => {

  it('should render to the page', () => {
    const AsideForecastComp = shallow(<AsideForecast data={{}} />);
    // console.log(AsideForecastComp.debug());

    expect(true)
  });

});
