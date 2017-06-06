import React from 'react';
import { shallow } from 'enzyme';
import SuggestionList from '../lib/Weathrly/components/SuggestionList/SuggestionList';

describe('SuggestionList Component', () => {
  const suggestions = ['Miami, FL', 'Memphis, TN', 'Mesa, AZ'];
  it('should render data passed as a prop', () => {
    const suggestionList = shallow(<SuggestionList suggestions={suggestions} />);
    const listItems = suggestionList.find('li');
    const listItemsChildren = listItems.map(e => e.prop('children'));

    expect(listItemsChildren).toEqual(suggestions);
  });

  it('should execute function when clicked', () => {
    const selectHandlerMock = jest.fn();
    const suggestionList = shallow(<SuggestionList suggestions={suggestions} selectHandler={selectHandlerMock} />);
    const listItem = suggestionList.find('.suggestion').first();

    listItem.simulate('click');
    listItem.simulate('click');
    listItem.simulate('click');

    expect(selectHandlerMock).toHaveBeenCalledTimes(3);
  });
});
