const React = require('react');
const ReactDOM = require('react-dom');

/* eslint-disable */
class Weathrly extends React.Component {
  render() {
    return (
      <h1>Test</h1>
    );
  }
}

ReactDOM.render(
  <Weathrly />,
  document.querySelector('.application')
);
