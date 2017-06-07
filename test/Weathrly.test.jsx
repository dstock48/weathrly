/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';

import Weathrly from '../lib/Weathrly/Weathrly';

describe('Weathrly Component', () => {
  const storageMock = () => {
    const storage = {};
    return {
      location: 'oakland, ca',

      clear() {
        return this.location = '';
      },
      getItem(key) {
        return key in storage ? storage[key] : null;
      },
      setItem: function(key, value) {
        storage[key] = value.toString();
      }
    };
  };

  window.localStorage = storageMock();

  it('should render welcome view to the page when no location is set', () => {
    let WeathrlyComp = mount(<Weathrly />);
    let welcomeHeading = <h1 className="welcome-msg">Welcome!</h1>;

    expect(WeathrlyComp.contains(welcomeHeading)).toEqual(false);

    localStorage.clear();
    WeathrlyComp = mount(<Weathrly />);

    expect(WeathrlyComp.contains(welcomeHeading)).toEqual(true);
  });

  it('should render standard view to the page when an acceptable location is set', () => {
    let WeathrlyComp = mount(<Weathrly />);
    let welcomeHeading = <h1 className="welcome-msg">Welcome!</h1>;

    localStorage.clear();
    expect(WeathrlyComp.contains(welcomeHeading)).toEqual(true);

    localStorage.location = 'denver, co';
    WeathrlyComp = mount(<Weathrly />);

    expect(WeathrlyComp.contains( <section className="AsideForecast" /> )).toEqual(true);
  });

  it('should render error view to the page when location is not found', () => {
    let WeathrlyComp = mount(<Weathrly />);
    let errorHeading = <h1 className="error-msg">Not Found!</h1>;

    expect(WeathrlyComp.state().isNotFound).toEqual(false)
    expect(WeathrlyComp.contains( errorHeading )).toEqual(false);

    WeathrlyComp.setState({isNotFound: true})

    expect(WeathrlyComp.state().isNotFound).toEqual(true)
    expect(WeathrlyComp.contains( errorHeading )).toEqual(true);

  });

  it('should change tabName in state when the changeTab fn is ran', () => {
    let WeathrlyComp = mount(<Weathrly />);

    expect(WeathrlyComp.state().tabName).toEqual('Hourly')

    WeathrlyComp.instance().changeTab({target: {textContent: '10 Day'}})

    expect(WeathrlyComp.state().tabName).toEqual('10 Day')
  });

  it('should change city in state when the setLocation fn is ran', () => {
    let WeathrlyComp = mount(<Weathrly />);

    expect(WeathrlyComp.state().city).toEqual('no location')

    WeathrlyComp.instance().setLocation('denver, co')

    expect(WeathrlyComp.state().city).toEqual('denver, co')
  });
});
