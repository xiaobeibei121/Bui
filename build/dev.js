const path = require('path');
const webpackMerge = require('webpack-merge');
const open = require('open');
const baseConfig = require('./base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config.js');

const resolvePath = (dir) => {
    return path.resolve(__dirname, '../', dir);
};

let devConfig = webpackMerge(baseConfig, {
    entry: {
        'mobile/index': resolvePath('mobile/index.js'),
    },
    output: {
        path: config.distRootPath,
        publicPath: config.publicPath,
        filename: '[name].[hash:7].js'
    },
    devServer: {
        host: '::',
        contentBase: config.distRootPath,
        watchContentBase: true,
        disableHostCheck: true,
        compress: true,
        port: config.server.port,
        overlay: {
            warnings: false,
            errors: true
        },
        stats: {
            colors: true,
            chunks: false,
            children: false,
            entrypoints: false,
            modules: false
        },
        after: function () {
            open(`http://localhost:${config.server.port}/mobile/#/`);
        }
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(c|sa|sc)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')({
                                    remove: false
                                })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: resolvePath('mobile/index.html'),
            filename: 'mobile/index.html',
            chunks: ['mobile/index'],
            inject: true
        })
    ]
});

module.exports = devConfig;
