var React = require('react');
var createClass = require('create-react-class');

class Heading extends React.Component {
  _handleClick() {
    alert('Click!');
  }

  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="./style.css" />
        </head>
        <body>
          <div>
            <h1>Hello World!</h1>
            <button onClick={this._handleClick}>Click</button>
          </div>
          <script src='./bundle.js' />
        </body>
      </html>
    );
  }
};

module.exports = Heading;
