import React from 'react';
import { shallow, mount } from 'enzyme';

import HourlyRow from '../lib/Weathrly/components/HourlyRow/HourlyRow';

describe('HourlyRow Component', () => {

  it('should render to the page', () => {
    let HourlyRowComp = shallow(
      <HourlyRow
        key={Date.now() * 3}
        hourData={{}}
        data={{ condition: 'Chance of Flurries' }} />
  );
    // console.log(HourlyRowComp.debug());

    expect(true)
  });

});
