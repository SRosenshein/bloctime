var React = require('react');
var Timer = require('../components/Timer');

var TimerContainer = React.createClass({
	getInitialState: function() {
		return {
			seconds: 0,
			isPaused: false
		}
	},

	tick: function() {
		setTimeout(function() {
			var seconds = this.state.seconds;
			this.setState({seconds: seconds - 1});
			tick();
		}.bind(this), 1000);
	}

	render: function() {
		return (
			<Timer />
		)
	}
});

module.exports = TimerContainer;