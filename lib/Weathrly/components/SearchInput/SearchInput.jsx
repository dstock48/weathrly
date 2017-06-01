import React from 'react'; // eslint-disable-line
import './SearchInput.css';

const SearchInput = ({ handlers, data, input }) => {
  let borderAccentColor = { borderColor: '#EE6F6F' };
  let backgroundAccentColor = { backgroundColor: '#EE6F6F' };

  if (data.currentHour >= data.sunSetTime ||
      data.currentHour <= data.sunRiseTime) {
    borderAccentColor = { borderColor: '#A332D6' };
    backgroundAccentColor = { backgroundColor: '#A332D6' };
  }

  return (
    <section className="SearchInput">
      <input type="text"
        onKeyUp={handlers.input}
        value={input}
        style={borderAccentColor}
        className="search-input"
        onChange={handlers.input}
        placeholder="City / State / Zip"/>
      <button className="search-btn"
        style={backgroundAccentColor}
        onClick={handlers.change}>
        <img className="search-icon" src="lib/assets/magnifier.svg" alt=""/>
      </button>
    </section>
  );
};

// onKeyPress={handlers.change}


export default SearchInput;
