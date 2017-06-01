import React, { Component } from 'react'; // eslint-disable-line
import './SearchInput.css';

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
    const { data } = this.props;
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
          onKeyUp={this.enterKeyHandler.bind(this)}
          style={borderAccentColor}
          className="search-input"
          onChange={e => this.setState({ inputValue: e.target.value })}
          placeholder="City / State / Zip"/>
        <button className="search-btn"
          style={backgroundAccentColor}
          onClick={this.submitHandler.bind(this)}>
          <img className="search-icon" src="lib/assets/magnifier.svg" alt=""/>
        </button>
      </section>
    );
  }
}

export default SearchInput;
