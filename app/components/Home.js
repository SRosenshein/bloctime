var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');

var Home = React.createClass({
	render: function() {
		return (
			<MainContainer>
				<h1 className='text-center'>Welcome to Bloctime!</h1>
				<small>Learn more about the Pomodoro Time Management technique <a href="http://www.pomodorotechnique.com/">here.</a></small>
				<h3>Start new work session</h3>
				<Link>
					<button type="button" className="btn btn-lg btn-success">Start Timer</button>
				</Link>
			</MainContainer>
		)
	}
});

module.exports = Home;