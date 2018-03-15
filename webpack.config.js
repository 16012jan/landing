const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';


module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    "./src/index.js",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js"
  },
  watch: isDevelopment,
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
      },{
        test: /\.woff2?$|\.woff$|\.ttf$|\.eot$/,
        loader: 'file-loader?name=[name].[ext]&outputPath=./assets/fonts/&publicPath=/assets/fonts/'
      },{
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader?name=[name].[ext]&outputPath=./assets/images/&publicPath=/assets/images/'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify( process.env.NODE_ENV || 'development')
      }
    }),
    new CopyWebpackPlugin([
        {from:'./src/assets/images',to:'./assets/images'}
    ]),
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
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  devtool:  isDevelopment ? 'source-map' : false,
  devServer: {
    contentBase: "/",
    watchContentBase: true,
    hot:true,
    inline:true,
    historyApiFallback: true,
    overlay: {
     warnings: true,
     errors: true
   },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }

  }
};
