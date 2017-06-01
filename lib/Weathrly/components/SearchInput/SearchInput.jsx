import React from 'react'; // eslint-disable-line
import './SearchInput.css';


const SearchInput = ({handlers}) => (
  <section className="SearchInput">
    <input onChange={handlers.input} className="search-input" type="text" placeholder="City / State / Zip"/>
    <button onClick={handlers.change} className="search-btn"><img className="search-icon" src="lib/assets/magnifier.svg" alt=""/></button>
  </section>
);

// onKeyPress={handlers.change}


export default SearchInput;
