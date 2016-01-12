var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var path = require('path');
var cp = require('child_process');
var config = require('./webpack.config');

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  // webpack-dev-server options
  contentBase: path.join(__dirname, 'app'),
  historyApiFallback: true,
  hot: true,  
  progress: true,
  publicPath: '/build/',
  stats: { colors: true },
});
server.listen(8080, "localhost", function() {

  cp.spawn('electron', ['.']);

});
