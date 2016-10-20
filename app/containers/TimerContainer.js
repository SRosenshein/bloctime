var React = require('react');
var Timer = require('../components/Timer');
var moment = require('moment');
require('moment-duration-format');

var TimerContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			seconds: 0,
			isTicking: false
		}
	},
	componentDidMount: function() {
		this.originalTime = this.props.route.seconds
		this.setState({
			seconds: this.originalTime
		});
	},
	tick: function() {
		this.setState({isTicking: true});
		this.interval = setInterval(function() {
			var seconds = this.state.seconds;
			this.setState({seconds: seconds - 1});
		}.bind(this), 1000)
	},
	handleReset: function() {
		window.clearInterval(this.interval)
		this.setState({
			isTicking: false,
			seconds: this.originalTime
		});
	},
	render: function() {
		return (
			<Timer 
				tick={this.tick}
				isTicking={this.state.isTicking}
				onReset={this.handleReset}
				seconds={moment.duration(this.state.seconds, "seconds").format("mm:ss")}
				header={this.props.route.header} />
		)
	}
});

module.exports = TimerContainer;