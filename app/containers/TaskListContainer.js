var React = require('react');

var TaskListContainer = React.createClass({
	mixins: [ReactFireMixin],

	getInitialState: function(){
		return {
			items: [],
			text: ''
		};
	},
	componentWillMount: function(){
		this.bindAsArray(new Firebase("https://bloctime-2c670.firebaseio.com/items/"), "items");
	},
	handleSubmit: function(e){
		e.preventDefault();
		this.firebaseRefs["items"].push({
			text: this.state.text
		});
		this.setState({text: ""});
	},
	onChange: function(e){
		this.setState({text: e.target.value});
	},
	render: function(){

	}
});

module.exports = TaskListContainer;