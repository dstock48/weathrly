import React from 'react';
import getRandomKey from '../../../utils/helperFunctions';
import './SuggestionList.css';

function SuggestionList({ suggestions, selectHandler }) {
  const suggestionsArray = suggestions.slice(0, 5).map(e =>
    <li key={getRandomKey()} className="suggestion" onClick={() => selectHandler(e)}>{e}</li>);

  return (
    <section className="SuggestionList">
      {suggestionsArray}
    </section>
  );
}

export default SuggestionList;
