import React from 'react';
import { getRandomKey } from '../../../utils/helperFunctions';
import './SuggestionList.css';

function SuggestionList({ suggestions, selectHandler }) {
  const suggestionsArray = suggestions.slice(0, 5).map(e =>
    <option value={e} key={getRandomKey()} className="suggestion" />
//    <li key={getRandomKey()} className="suggestion" onClick={() => selectHandler(e)}>
//      <button className="suggestion-btn">{e}</button>
//    </li>
  );

  return (
//    <section id="SuggestionList" className="SuggestionList">
//      {suggestionsArray}
//    </section>

    <datalist id="SuggestionList" className="SuggestionList">
      {suggestionsArray}
    </datalist>
  );
}

export default SuggestionList;
