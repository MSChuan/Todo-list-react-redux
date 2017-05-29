var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: { // 打包入口
        index: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ],
        vendor: [  // 将react和react-dom这些单独打包出来，减小打包文件体积
            "react",
            "react-dom"
        ]
    },
    output: { // 打包目标路径
        path: __dirname + "/dist/",
        filename: "js/[name].js"
    },
    module: {
        loaders: [{    // babel loader
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.(scss|sass|css)$/,  // 打包sass和css文件
            loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!postcss-loader!sass-loader"})
        }, {
            test: /\.(png|jpg|jpng|eot|ttf)$/, // 打包图片和字体文件
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
        new webpack.optimize.CommonsChunkPlugin("js/vendor.bundle.js"), //这是之前单独打包出来的react、react-dom等文件
        new ExtractTextPlugin("css/index.css"), // 将所有sass/css文件打包成一个index.css文件
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
};

module.exports = config;