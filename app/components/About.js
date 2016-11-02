var React = require('react');
var styles = require('../styles');

function About (props) {
	return (
		<div className="text-center" style={styles.space}>
			<h1>About the <a href="http://www.pomodorotechnique.com/">Pomodoro </a>Time Management Technique</h1>

			<div className="basics text-left">
				<h2>Basics:</h2>
				<ol>
					<li>User should alternate a 25-minute work session with a 5-minute break in order to maximize focus and production</li>
					<li>During a work session, the user may not do anything unrelated to task at hand</li>
					<li>During a break session, the user may not do or think about anything related to task</li>
				</ol>
				<h3>Specifics:</h3>
				<ul>
					<li>A user may not pause either a work or break session</li>
					<li>After completing 4 consecutive work sessions, the user is allowed a bonus 30-minute break</li>
					<li>If a distraction arises during a work session, the user is expected to write it down and tend to it once the session is complete</li>	
				</ul>

				<h4>Technologies Used:</h4>
				<ul>
					<li>ReactJS</li>
					<li>FirebaseJS</li>
					<li>Babel</li>
					<li>Webpack</li>
					<li>Heroku</li>
				</ul>

				<p><small>Bloctime project by <a href="http://www.github.com/srosenshein/bloctime">Sam Rosenshein</a> with assistance by <a href="http://www.bloc.io">Bloc</a></small></p>
			</div>
		</div>

	)
}

module.exports = About;

