const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/build/",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "postcss-loader",
            options: {
                ident: "postcss",
                plugins: (loader) => [
                    require("autoprefixer")(),
               ]
            }
        },{
            loader: "less-loader", options: {
                noIeCompat: true
            }
        }]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify( process.env.NODE_ENV || 'development')
      }
    }),
    // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('bundle.css'),
    // new CompressionPlugin({
    //     asset: "[path].gz[query]",
    //     algorithm: "gzip",
    //     test: /\.js$|\.html$/,
    //     threshold: 10240,
    //     minRatio: 0.8
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: true,
    //   compress: {
    //     warnings: false,
    //     pure_getters: true,
    //     unsafe: true,
    //     unsafe_comps: true,
    //     screw_ie8: true
    //   },
    //   output: {
    //     comments: false,
    //   },
    //   exclude: [/\.min\.js$/gi]
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   children: true,
    //   async: true,
    // }),
    // new webpack.optimize.OccurrenceOrderPlugin()
  ],
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  }
};
