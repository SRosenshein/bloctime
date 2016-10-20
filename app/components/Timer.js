var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var moment = require('moment');

function Timer (props) {
	return (
		<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
			<h1>{props.seconds}</h1>
			<div className="col-sm-12 text-center">
				<button type="button" className="btn btn-lg btn-success" style={styles.space} onClick={props.tick}>Start</button>
				<button type="button" className="btn btn-lg btn-danger" style={styles.space} onClick={props.tick}>Pause</button>
			</div>
		</div>
	)
}

Timer.propTypes = {
	seconds: PropTypes.number.isRequired,
	onPause: PropTypes.func.isRequired,
	tick: PropTypes.func.isRequired
}

module.exports = Timer;