import React from 'react';
import { shallow, mount } from 'enzyme';

import ErrorView from '../lib/Weathrly/components/ErrorView/ErrorView';

describe('ErrorView Component', () => {

  it('should render to the page', () => {
    const ErrorViewComp = shallow(
      <ErrorView
        data={{}}
        handler={() => true}
        locationHandler={() => true} />
  );
    // console.log(ErrorViewComp.debug());

    expect(true)
  });

});
