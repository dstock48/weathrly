import React from 'react';
import { shallow, mount } from 'enzyme';

import ErrorView from '../lib/Weathrly/components/ErrorView/ErrorView';

describe('ErrorView Component', () => {

  it('should render to the page', () => {
    let ErrorViewComp = shallow(
      <ErrorView
        data={{}}
        handler={() => {return true}}
        locationHandler={() => {return true}} />
  );
    // console.log(ErrorViewComp.debug());

    expect(true)
  });

});
