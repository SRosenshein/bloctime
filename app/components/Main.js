var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Main = React.createClass({
	render: function() {
		return (
			<div className='main-container'>
				<div className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
							<Link to='/'><span className="navbar-brand">Bloctime</span></Link>
						</div>
					</div>
				</div>
				{this.props.children}
			</div>
		)
	}
});

module.exports = Main;