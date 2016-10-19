var React = require('react');

var Main = React.createClass({
	render: function() {
		return (
			<div className='main-container'>
				<div className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
							Bloctime
						</div>
						<ul className="nav navbar-nav navbar-right">
							<li>Item One</li>
							<li>Item Two</li>
						</ul>
					</div>
				</div>
				{this.props.children}
			</div>
		)
	}
});

module.exports = Main;