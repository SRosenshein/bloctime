var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var moment = require('moment');
require('moment-duration-format');
var TaskListContainer = require('../containers/TaskListContainer');


function Timer (props) {
	return (
		<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
			<div className="col-sm-3 text-left">
				<TaskListContainer />
			</div>
			<div className="col-sm-9 text-center">
				<h1>{moment.duration(props.seconds, "seconds").format('mm:ss', {trim: false})}</h1>
				<h3>{props.header}</h3>
				<p>{props.isTicking
				? <button type="button" className="btn btn-sm btn-danger" style={styles.space} onClick={props.onReset}>Reset Session</button>
				: <button type="button" className="btn btn-lg btn-success" style={styles.space} onClick={props.tick}>Start Session</button> }</p>
				<small>Consecutive work sessions completed: {props.sessionCount}</small>
			</div>
		</div>
	)
}

Timer.propTypes = {
	seconds: PropTypes.number.isRequired,
	isTicking: PropTypes.bool.isRequired,
	onReset: PropTypes.func.isRequired,
	tick: PropTypes.func.isRequired,
	header: PropTypes.string.isRequired,
	sessionCount: PropTypes.number.isRequired
}

module.exports = Timer;