var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');
var styles = require('../styles');

var Home = React.createClass({
	render: function() {
		return (
			<MainContainer>
				<h1 className='text-center'>Welcome to Bloctime!</h1>
				<small>Learn more about the Pomodoro Time Management technique <a href="http://www.pomodorotechnique.com/">HERE.</a></small>
				<p><Link to='/work'>
					<button type="button" className="btn btn-lg btn-success" style={styles.space}>New Work Session</button>
				</Link></p>
			</MainContainer>
		)
	}
});

module.exports = Home;