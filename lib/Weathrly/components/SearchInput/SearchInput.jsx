import React, { Component } from 'react';
import SuggestionList from '../SuggestionList/SuggestionList';
import colorCondition from '../../../utils/colorCondition';
import Trie from '../../../utils/Trie';
import cities from '../../../utils/largest1000cities';
import './SearchInput.css';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      suggestions: [],
    };
  }

  getInputValue(e) {
    const inputValue = e.target.value;
    let suggestions;
    try {
      suggestions = this.props.trie.suggest(inputValue);
    } catch (err) {
      suggestions = [];
    }

    if (inputValue === '') {
      suggestions = [];
    }

    this.setState({ inputValue, suggestions });
  }

  enterKeyHandler(e) {
    if (e.key === 'Enter') {
      this.submitHandler();
    }
  }
  submitHandler(val) {
    const value = val || this.state.inputValue;
    this.props.handler(value);
    this.setState({
      inputValue: '',
    });
  }

  selectHandler(suggestion) {
    this.props.trie.select(suggestion);
    this.setState({ inputValue: suggestion, suggestions: [] });
    this.submitHandler(suggestion);
    this.search.value = '';
  }

  render() {
    if (this.props.errorClass) {
      return (
        <section className="ErrorStyle">
          <input
            ref={(input) => { this.search = input; }}
            type="text"
            onKeyUp={this.enterKeyHandler.bind(this)}
            style={{ borderColor: this.props.accentColor }}
            className="search-input"
            onChange={this.getInputValue.bind(this)}
            value={this.val}
            placeholder="City / State / Zip"
          />
          <button
            className="search-btn"
            style={{ backgroundColor: this.props.accentColor }}
            onClick={this.submitHandler.bind(this)}
          >
            <img className="search-icon" src="lib/assets/magnifier.svg" alt="" />
          </button>
          <SuggestionList
            suggestions={this.state.suggestions}
            selectHandler={this.selectHandler.bind(this)}
          />
        </section>
      );
    }

    if (!this.props.data.condition) {
      return (
        <div className="SearchInput">
          <input
            type="text"
            className="search-input"
            placeholder="City / State / Zip"
          />
          <button className="search-btn">
            <img className="search-icon" src="lib/assets/magnifier.svg" alt="" />
          </button>
        </div>
      );
    }

    const accColor = colorCondition[this.props.data.condition].accentColor;
    let borderAccentColor = { borderColor: accColor };
    let backgroundAccentColor = { backgroundColor: accColor };

    if (this.props.data.currentHour >= this.props.data.sunSetTime ||
      this.props.data.currentHour <= this.props.data.sunRiseTime) {
      borderAccentColor = { borderColor: '#A332D6' };
      backgroundAccentColor = { backgroundColor: '#A332D6' };
    }

    return (
      <section className="SearchInput">
        <input
          ref={(input) => { this.search = input; }}
          type="text"
          onKeyUp={this.enterKeyHandler.bind(this)}
          style={borderAccentColor}
          className="search-input"
          onChange={this.getInputValue.bind(this)}
          placeholder="City / State / Zip"
        />
        <button
          className="search-btn"
          style={backgroundAccentColor}
          onClick={this.submitHandler.bind(this)}
        >
          <img className="search-icon" src="lib/assets/magnifier.svg" alt="" />
        </button>
        <SuggestionList
          suggestions={this.state.suggestions}
          selectHandler={this.selectHandler.bind(this)}
        />
      </section>
    );
  }
}

export default SearchInput;
