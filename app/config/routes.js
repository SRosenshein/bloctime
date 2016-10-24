var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var TimerContainer = require('../containers/TimerContainer');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='work' header="Work Session" seconds={3} component={TimerContainer} />
			<Route path='break' header="Break Time" seconds={2} component={TimerContainer} />
			<Route path='longbreak' header="Extra Break Time" seconds={4} component={TimerContainer} />
			<Route path='test' header="Test" seconds={3} component={TimerContainer} />
		</Route>
	</Router>
); // 1500s = 25min work, 300s = 5min break, 1800s = 30min long break

module.exports = routes;