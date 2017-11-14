var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './public/index.js',
	output: { path: __dirname + '/public', filename: 'bundle.js' },
	module: {
		loaders: [
		{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /.(png|woff(2)?|eot|ttf|svg)(?[a-z0-9=.]+)?$/,
			loader: 'url-loader?limit=100000'
		}]
	},
	watch: true
}