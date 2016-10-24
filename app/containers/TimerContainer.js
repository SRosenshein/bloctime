var React = require('react');
var Timer = require('../components/Timer');
var buzz = require('buzz');
var mySound = new buzz.sound("app/assets/sounds/ding", {preload: true, formats: ['mp3']});

var TimerContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			seconds: 0,
			isTicking: false,
			sessionCount: 0
		}
	},
	componentDidMount: function() {
		this.originalTime = this.props.route.seconds
		this.setState({
			seconds: this.originalTime
		});
	},
	componentWillReceiveProps: function(nextProps) {
		this.setState({seconds: nextProps.route.seconds})
		this.originalTime = nextProps.route.seconds;
	},
	tick: function() {
		this.setState({isTicking: true});
		this.interval = setInterval(function() {
			var seconds = this.state.seconds;
			this.setState({seconds: seconds - 1});

			if (this.state.seconds == 0){
				mySound.play();
				this.handleSession();
			} 
		}.bind(this), 1000)
	},
	handleSession: function() {
		window.clearInterval(this.interval)
		var newState = {isTicking: false};
		var activePath = this.props.location.pathname;
		var sessionCount = this.state.sessionCount;

		/* Extra long break every 4 work sessions */
		switch (activePath){
			case '/work':
				sessionCount++;
				if (sessionCount % 4 != 0){
					this.context.router.push({pathname: '/break'})
				} else {
					this.context.router.push({pathname: '/longbreak'})
				}
				break;
			case '/break':
			case '/longbreak':
				this.context.router.push({pathname: '/work'})
				break;
			default: 
				this.context.router.push({pathname: '/'})
		}
		newState.sessionCount = sessionCount;
		this.setState(newState);
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
				seconds={this.state.seconds}
				header={this.props.route.header}
				sessionCount={this.state.sessionCount} />
		)
	}
});

module.exports = TimerContainer;