var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function Timer (props) {
	return (
		<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
			<h1>{props.seconds}</h1>
			<div className="col-sm-12 text-center">
				<h3>{props.header}</h3>
				{props.isTicking
				? <button type="button" className="btn btn-sm btn-danger" style={styles.space} onClick={props.onReset}>Reset Session</button>
				: <button type="button" className="btn btn-lg btn-success" style={styles.space} onClick={props.tick}>Start Session</button> }
			</div>
		</div>
	)
}

Timer.propTypes = {
	seconds: PropTypes.string.isRequired,
	isTicking: PropTypes.bool.isRequired,
	onReset: PropTypes.func.isRequired,
	tick: PropTypes.func.isRequired,
	header: PropTypes.string.isRequired
}

module.exports = Timer;