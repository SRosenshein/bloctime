var React = require('react');
var Timer = require('../components/Timer');

var TimerContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			seconds: 0,
			isPaused: false
		}
	},
	componentDidMount: function() {
		this.setState({
			seconds: this.props.route.seconds
		});
	},
	tick: function() {
		setTimeout(function() {
			var seconds = this.state.seconds;
			this.setState({seconds: seconds - 1});
			tick();
		}.bind(this), 1000);
	},
	handlePause: function() {

	},
	render: function() {
		return (
			<Timer 
				tick={this.tick}
				onPause={this.handlePause}
				seconds={this.state.seconds} />
		)
	}
});

module.exports = TimerContainer;