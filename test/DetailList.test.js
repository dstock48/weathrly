import React from 'react';
import { shallow, mount } from 'enzyme';

import DetailList from '../lib/Weathrly/components/DetailList/DetailList';

describe('DetailList Component', () => {

  it('should render to the page', () => {
    const DetailListComp = shallow(
      <DetailList
        selectedDay={'6'}
        selectedMonth={'6'}
        getDay={() => true}
        data={{}}
        tabName={'Hourly'}
        handler={() => true} />
      );
    console.log(DetailListComp.debug());

    expect(true)
  });

});
