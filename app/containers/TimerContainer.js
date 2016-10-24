var React = require('react');
var Timer = require('../components/Timer');

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
				this.handleSession();
			} 
		}.bind(this), 1000)
	},
	handleSession: function() {
		window.clearInterval(this.interval)
		this.setState({isTicking: false});
		var activePath = this.props.location.pathname;
		var sessionCount = this.state.sessionCount;

		if (activePath == '/work'){
			this.setState({sessionCount: sessionCount + 1});

			if (this.state.sessionCount % 4 != 0){
				this.context.router.push({pathname: '/break'})
			} else {
				this.context.router.push({pathname: '/longbreak'})
			}
		} else if (activePath == '/break'){
			this.context.router.push({pathname: '/work'})
		} else if (activePath == '/longbreak'){
			this.context.router.push({pathname: '/work'})
		}
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