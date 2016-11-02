/*var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'index.js');

var config = {
	devtool: 'eval',
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		mainPath
	],
	output: {
		path: buildPath,
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	module: {
		loaders: {test: /\.js$/, loader: 'babel-loader', exclude: [nodeModulesPath]}
	},
	plugins: [new Webpack.HotModuleReplacementPlugin()]
};

module.exports = config;*/





var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});
var port = process.env.PORT || 8080;
module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:' + port,
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	},
	plugins: [HtmlWebpackPluginConfig]
};

