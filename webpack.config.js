const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

const pathToDist = path.resolve(__dirname, "dist");
const pathToSrc = path.resolve(__dirname, "src");


let pluginsArray = [
  new HtmlWebpackPlugin({
    template: "./index.html"
  }),
  new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      DEVELOPMENT:isDevelopment
  }),
  new CopyWebpackPlugin([
      {from:'./assets/images',to:'./assets/images'}
  ])
];

if (isDevelopment) {
  pluginsArray = [
    ...pluginsArray,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: true,
    }),

  ];
} else {
  pluginsArray = [
    ...pluginsArray,
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: true,
      compress: {
        warnings: false,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi]
    })
  ];
}

module.exports = {
  context: pathToSrc,
  entry: isDevelopment?
  [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    "./index.js",
  ]
  :
  ["./index.js"],
  output: {
    path: pathToDist,
    publicPath: "/",
    filename: "[name].js"
  },

  watch: isDevelopment,
  devtool:  isDevelopment ? 'source-map' : false,

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
        use: isDevelopment?
        [{
            loader: "style-loader"
        }, {
            loader: "css-loader",
            options: {minimize: !isDevelopment, sourceMap: isDevelopment}
        }, {
            loader: "postcss-loader",
            options: {
                ident: "postcss",
                plugins: (loader) => [
                    require("autoprefixer")({browsers:["last 2 version"]}),
               ]
            }
        },{
            loader: "less-loader", options: {
                noIeCompat: true
            }
        }]
        :
        ExtractTextPlugin.extract({
           fallback: "style-loader",
           use: [
              {
            loader: "css-loader",
            options: {minimize: !isDevelopment, sourceMap: isDevelopment}
        }, {
            loader: "postcss-loader",
            options: {
                ident: "postcss",
                plugins: (loader) => [
                    require("autoprefixer")({browsers:["last 2 version"]}),
               ]
            }
        },{
            loader: "less-loader", options: {
                noIeCompat: true
            }
        }]
      })
      },{
        test: /\.woff2?$|\.woff$|\.ttf$|\.eot$/,
        loader: 'file-loader?name=[name].[ext]&outputPath=./assets/fonts/&publicPath=/assets/fonts/'
      },{
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader?name=[name].[ext]&outputPath=./assets/images/&publicPath=/assets/images/'
      }
    ]
  },

  plugins: pluginsArray,
  // plugins: [
  //   new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/),
  //
  // ],

  devServer: {
    contentBase: "/",
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
