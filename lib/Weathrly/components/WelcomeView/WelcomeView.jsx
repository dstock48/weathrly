import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import './WelcomeView.css';

function WelcomeView({ data, locationHandler }) {
  return (
  <section className="WelcomeView">
    <span className="emoji">😄</span>
    <h1 className="welcome-msg">Welcome!</h1>
    <p className="welcome-sub-msg">Enter your location</p>
    <SearchInput errorClass={true} data={data} handler={locationHandler} />
  </section>
  );
}

export default WelcomeView;
