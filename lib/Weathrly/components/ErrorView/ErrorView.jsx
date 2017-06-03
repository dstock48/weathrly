import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import './ErrorView.css';

function ErrorView({ data, locationHandler }) {
  return (
  <section className="ErrorView">
    <span className="emoji">😭</span>
    <h1 className="error-msg">Not Found!</h1>
    <p className="error-sub-msg">Try again...</p>
    <SearchInput errorClass={true} data={data} handler={locationHandler} accentColor={'#3a405d'} />
  </section>
  );
}

export default ErrorView;
