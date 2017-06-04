var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ],
        vendor: [  // pack react and react-dom independently
            "react",
            "react-dom"
        ]
    },
    output: {
        path: __dirname + "/dist/",
        filename: "js/[name].js"
    },
    module: {
        loaders: [{    // babel loader
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.(scss|sass|css)$/,  // pack sass and css files
            loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!sass-loader"})
        }, {
            test: /\.(png|jpg|jpng|eot|ttf)$/, // pack images and fonts
            loader: 'url-loader?limit=8192&name=images/[name].[ext]'
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.tpl.html',
          inject: 'body',
          filename: 'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin("bundle/vendor.bundle.js"), //packed independently such as react and react-dom
        new ExtractTextPlugin("css/index.css"), // pack all the sass and css files into index.csss
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
};

module.exports = config;