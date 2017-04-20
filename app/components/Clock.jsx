var React = require('react');


var Clock = React.createClass({
  getDefaultProps: function () {
      totalSeconds: 0
    },

  propTypes: {
    totalSeconds: React.PropTypes.number
  },

  formatSeconds: function (totalSeconds) {
    var seconds = totalSeconds % 60; // use mod (%) to get remainder
    var minutes = Math.floor(totalSeconds/60); //math.floor rounds down to nearest whole number

    if (seconds <10) {
      seconds = '0' + seconds;
    }

    if (minutes <10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  },

  render: function () {
    var {totalSeconds} = this.props; //es6 destructuring to pull prop into variable

    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;
