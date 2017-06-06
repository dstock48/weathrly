import React from 'react';
import { shallow, mount } from 'enzyme';
import cityData from './cityDataMock';
import Trie from '../lib/utils/Trie';

import SearchInput from '../lib/Weathrly/components/SearchInput/SearchInput';

describe('SearchInput Component', () => {
  it('should render to the page with the correct placeholder message', () => {
    const trie = new Trie();
    let SearchInputComp = mount(<SearchInput trie={trie} data={cityData} handler={() => true} />);

    expect(SearchInputComp.find('.search-input').prop('placeholder')).toEqual('City / State / Zip');
  });

  it('should render button with a search icon inside', () => {
    const trie = new Trie();
    let SearchInputComp = mount(<SearchInput trie={trie} data={cityData} handler={() => true} />);

    expect(SearchInputComp.find('.search-btn').find('img').prop('src')).toEqual('lib/assets/magnifier.svg');
  });
});

// TODO: Render, state change on input change, fn executes when clicking search button
