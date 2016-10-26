var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function TaskList (props) {
	return (
		<div>
			<h2>Enter new task:</h2>
			<form onSubmit={props.onSubmit} >
				<div className="form-group">
					<input className='form-control' onChange={props.onChange} value={props.value} type="text" />
					<button className='btn btn-sm btn-primary' style={styles.right} type='submit'>
						Add Task
					</button>
				</div>
			</form>
			<h3 style={styles.spacetop}>Task History</h3>
				<ol>
					{props.items.map(props.createItem).reverse()}
				</ol>
		</div>
	);
}

TaskList.propTypes = {
	items: PropTypes.array.isRequired,
	value: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	createItem: PropTypes.func.isRequired
}

module.exports = TaskList;