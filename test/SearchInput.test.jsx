import React from 'react';
import { shallow, mount } from 'enzyme';
import cityData from './cityDataMock';
import Trie from '../lib/utils/Trie';

import SearchInput from '../lib/Weathrly/components/SearchInput/SearchInput';

describe('SearchInput Component', () => {
  it('should render to the page with the correct placeholder message', () => {
    const trie = new Trie();
    const SearchInputComp = mount(<SearchInput trie={trie} data={cityData} handler={() => true} />);

    expect(SearchInputComp.find('.search-input').prop('placeholder')).toEqual('City / State / Zip');
  });

  it('should render button with a search icon inside', () => {
    const trie = new Trie();
    const SearchInputComp = mount(<SearchInput trie={trie} data={cityData} handler={() => true} />);

    expect(SearchInputComp.find('.search-btn').find('img').prop('src')).toEqual('lib/assets/magnifier.svg');
  });

  it('should update inputValue state on input change event', () => {
    const trie = new Trie();
    const SearchInputComp = mount(<SearchInput trie={trie} data={cityData} handler={() => true} />);
    const input = SearchInputComp.find('.search-input');
    const inputValue = 'phoenix, az';
    const changeEvt = { target: { value: inputValue } };

    expect(SearchInputComp.state('inputValue')).toEqual('');

    input.simulate('change', changeEvt);
    expect(SearchInputComp.state('inputValue')).toEqual('phoenix, az');

  });

  it('should execute function when search button is clicked', () => {
    const trie = new Trie();
    const mockFn = jest.fn();
    const SearchInputComp = mount(<SearchInput trie={trie} data={cityData} handler={mockFn} />);
    const button = SearchInputComp.find('.search-btn');

    button.simulate('click');
    button.simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
