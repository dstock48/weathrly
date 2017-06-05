import React, { Component } from 'react';
import './SearchInput.css';
import colorCondition from '../../../utils/colorCondition';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  submitHandler() {
    this.props.handler(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  }

  enterKeyHandler(e) {
    if (e.key === 'Enter') {
      this.submitHandler();
    }
  }

  render() {
    if (this.props.errorClass) {
      return (
        <section className="ErrorStyle">
          <input
            type="text"
            onKeyUp={this.enterKeyHandler.bind(this)}
            style={{ borderColor: this.props.accentColor }}
            className="search-input"
            onChange={e => this.setState({ inputValue: e.target.value })}
            placeholder="City / State / Zip"
          />
          <button
            className="search-btn"
            style={{ backgroundColor: this.props.accentColor }}
            onClick={this.submitHandler.bind(this)}
          >
            <img className="search-icon" src="lib/assets/magnifier.svg" alt="" />
          </button>
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
          type="text"
          onKeyUp={this.enterKeyHandler.bind(this)}
          style={borderAccentColor}
          className="search-input"
          onChange={e => this.setState({ inputValue: e.target.value })}
          placeholder="City / State / Zip"
        />
        <button
          className="search-btn"
          style={backgroundAccentColor}
          onClick={this.submitHandler.bind(this)}
        >
          <img className="search-icon" src="lib/assets/magnifier.svg" alt="" />
        </button>
      </section>
    );
  }
}

export default SearchInput;
