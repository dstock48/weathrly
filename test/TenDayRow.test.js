import React from 'react';
import { shallow, mount } from 'enzyme';

import TenDayRow from '../lib/Weathrly/components/TenDayRow/TenDayRow';

describe('TenDayRow Component', () => {

  it('should render to the page', () => {
    let TenDayRowComp = shallow(
      <TenDayRow getDay={{}}
        key={Date.now() * 3}
        dayData={{}}
        data={{ condition: 'Chance of Flurries' }} />
      );
    // console.log(TenDayRowComp.debug());

    expect(true)
  });

});
