var path = require('path');
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
	entry: [
    'webpack-dev-server/client?http://localhost:6666',
	'webpack/hot/only-dev-server',
    './app/index.js'
	],
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
	plugins: [
		new uglifyJsPlugin({
		  compress: {
			warnings: false
		  }
		}),
		new webpack.HotModuleReplacementPlugin()
	],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['babel'] }
        ]
    }
}