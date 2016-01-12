var path = require('path');
var webpack = require("webpack");
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
var isDevelopment = process.env.NODE_ENV === 'development';

var options = {
    debug: true,
    devtool: isDevelopment ? 'source-map' : 'eval',
    entry: (function (){
      var entries = [
        './app/entrypoints/main'
      ];

      if (isDevelopment) {
        entries.unshift('webpack-dev-server/client?http://localhost:8080', 'webpack/hot/dev-server');
      }

      return entries;
    })(),
    output: {
        path: path.join(__dirname, "app", "build"),
        filename: "bundle.js",
        libraryTarget: 'commonjs2',
        publicPath: 'http://localhost:8080/build/'
    },

    plugins: (function (){

      var plugins = [new webpack.optimize.DedupePlugin()];

      if (isDevelopment) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
      }

      return plugins;
    
    })(),

    resolve: {
      extensions: ['', '.js', '.jsx', '.node', '.json'],
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
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        loader: "style!css!sass?outputStyle=expanded"
      },

      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/vnd.ms-fontobject" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },
      ]
    },

    externals: ['pg-promise'],

    stats: {
      colors: true
    }
};

options.target = webpackTargetElectronRenderer(options);
module.exports = options;
