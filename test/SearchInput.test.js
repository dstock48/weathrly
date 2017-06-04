import React from 'react';
import { shallow, mount } from 'enzyme';

import SearchInput from '../lib/Weathrly/components/SearchInput/SearchInput';

describe('SearchInput Component', () => {

  it('should render to the page', () => {
    let SearchInputComp = shallow(<SearchInput data='fakeData' handler='fakeData' input='fakeData' />);
    // console.log(SearchInputComp.debug());

    expect(true)
  });

});
