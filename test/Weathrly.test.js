import React from 'react';
import { shallow, mount } from 'enzyme';

import Weathrly from '../lib/Weathrly/Weathrly';

describe('Weathrly Component', () => {
  const storageMock = () => {
    const storage = {};
    return {
      user: 'bob',
      clear() {
        return this.user = '';
      },
      getItem(key) {
        return key in storage ? storage[key] : null;
      },
    };
  };

  window.localStorage = storageMock();


  it('should render to the page', () => {
    const WeathrlyComp = shallow(<Weathrly />);
    // console.log(WeathrlyComp.debug());

    expect(true);
  });
});
