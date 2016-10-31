var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'index.js');

var config = {

	devtool: 'source-map',
	entry: mainPath,
	output: {
		path: buildPath,
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: [nodeModulesPath]
		}]
	}
};

module.exports = config;