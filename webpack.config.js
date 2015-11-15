var path = require('path');
var webpack = require("webpack");
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
var isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
    devtool: isDevelopment ? 'source-map' : 'eval',
    // this is required for native modules in electron
    target: webpackTargetElectronRenderer(module.exports),
    entry: (function (){
      var entries = [
        './app/entrypoints/main'
      ];

      if (isDevelopment) {
        entries.unshift('webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server');
      }

      return entries;
    })(),
    output: {
        path: path.join(__dirname, "app", "build"),
        filename: "bundle.js",
        publicPath: 'http://localhost:8080/build/'
    },

    plugins: (function (){

      return isDevelopment ? [
        new webpack.HotModuleReplacementPlugin()
      ] : [];

    })(),

    resolve: {
      extensions: ['', '.js', '.jsx'],
	    root: [path.join(__dirname, "app")],
	    modulesDirectories: ["node_modules"],
      packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
	  },

    module: {
      loaders: [{
        test: /\.js$/,
        loaders: (function (){
          var loaders = ['babel'];
          if (isDevelopment) {
            loaders.unshift('react-hot');
          }
          return loaders;
        })(),
        include: path.join(__dirname, 'app')
      }, {
        test: /\.scss$/,
        loader: "style!css!sass?outputStyle=expanded"
      },

      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/vnd.ms-fontobject" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }

      ]
    },

    stats: {
      colors: true
    }
};
