import React from 'react';
import { shallow, mount } from 'enzyme';

import ForecastDetail from '../lib/Weathrly/components/ForecastDetail/ForecastDetail';

describe('ForecastDetail Component', () => {

  it('should render to the page', () => {
    const ForecastDetailComp = shallow(
      <ForecastDetail data={{}}
        tabName={'Hourly'}
        handler={() => true}
        locationHandler={() => true}
        getDay={() => true}
        selectedDay={'6'}
        selectedMonth={'6'} />
    );
    // console.log(ForecastDetailComp.debug());

    expect(true)
  });

});
