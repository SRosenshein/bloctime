var React = require('react');
var TaskList = require('../components/TaskList');
var styles = require('../styles'); 
var firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var config = {
   apiKey: "AIzaSyChQ_-9BB42s_aIm_pAim5FgyS3v8l6GQY",
   authDomain: "bloctime-2c670.firebaseapp.com",
   databaseURL: "https://bloctime-2c670.firebaseio.com",
   storageBucket: "bloctime-2c670.appspot.com",
   messagingSenderId: "14146540040"
};
firebase.initializeApp(config);

var TaskListContainer = React.createClass({
	mixins: [ReactFireMixin],

	getInitialState: function(){
		return {
			items: [],
			text: ''
		};
	},
	componentWillMount: function(){
		var firebaseRef = firebase.database().ref().child("items");
		this.bindAsArray(firebaseRef, 'items');
	},
	handleSubmit: function(e){
		e.preventDefault();
		if (this.state.text && this.state.text.trim().length !== 0) {
			this.firebaseRefs['items'].push({
				text: this.state.text
			});
			this.setState({text: ""});
		}
	},
	onChange: function(e){
		this.setState({text: e.target.value});
	},
	createItem: function(item, index) {
		return (
			<li key={index}>
				{item.text}
			</li>
		);
	},
	render: function(){
		return (
			<TaskList
				items={this.state.items}
				onSubmit={this.handleSubmit}
				onChange={this.onChange}
				value={this.state.text}
				createItem={this.createItem} />
		)
	}
});

module.exports = TaskListContainer;