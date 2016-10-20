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
			<Route path='work' seconds={1500} component={TimerContainer} />
			<Route path='break' seconds={300} component={TimerContainer} />
		</Route>
	</Router>
); // 1500s = 25min, 300s = 5min, 1800s = 30min

module.exports = routes;