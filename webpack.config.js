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
		}]
	},
	watch: true
}