var React = require('react');
var createClass = require('create-react-class');

module.exports = createClass({
  _handleClick() {
    alert('Click!');
  },

  render: function() {
    return (
      <div>
        <h1>Hello World!</h1>
        <button onClick={this._handleClick}>Click</button>
      </div>
    );
  }
});
