import React from 'react'; // eslint-disable-line
import './SearchInput.css';


const SearchInput = () => (
  <section className="SearchInput">
    <input className="search-input" type="text" placeholder="City / State / Zip"/><button className="search-btn"><img className="search-icon" src="lib/assets/magnifier.svg" alt=""/></button>
  </section>
);


export default SearchInput;
