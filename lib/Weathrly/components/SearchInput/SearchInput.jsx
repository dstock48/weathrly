import React from 'react'; // eslint-disable-line
import './SearchInput.css';

const SearchInput = ({ handlers, data }) => {

  let borderColor = {
    borderColor: '#EE6F6F',
  };

  let backgroundColor = {
    backgroundColor: '#EE6F6F',
  };

  if (data.currentHour >= data.sunSetTime || data.currentHour <= data.sunRiseTime) {
    borderColor = {
      borderColor: '#A332D6',
    };

    backgroundColor = {
      backgroundColor: '#A332D6',
    };
  }

  return (
    <section className="SearchInput">
      <input style={borderColor} onChange={handlers.input} className="search-input" type="text" placeholder="City / State / Zip"/>
      <button style={backgroundColor} onClick={handlers.change} className="search-btn"><img className="search-icon" src="lib/assets/magnifier.svg" alt=""/></button>
    </section>
  );
}

// onKeyPress={handlers.change}


export default SearchInput;
