const path = require('path');
const webpackMerge = require('webpack-merge');
// const open = require('open');
const baseConfig = require('./base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HappyPack = require('happypack');
const os = require('os');
// const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const config = require('./config.js');

const resolvePath = (dir) => {
    return path.resolve(__dirname, '../', dir);
};

let devConfig = webpackMerge(baseConfig, {
    entry: {
        'mobile/index': resolvePath('mobile/index.js'),
        // 'document/index': resolvePath('document/index.js')
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
        // before: function (app, server) {
        //     const chokidar = require('chokidar');
        //     const files = [
        //         path.join(__dirname, '../document/index.html')
        //     ];
        //     const options = {
        //         followSymlinks: false,
        //         depth: 5
        //     };
        //     let watcher = chokidar.watch(files, options);

        //     watcher.on('all', _ => {
        //         server.sockWrite(server.sockets, 'content-changed');
        //     });
        // },
        // after: function () {
        //     open(`http://localhost:${config.server.port}/document/#/`);
        // }
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
            },
            // {
            //     test: /\.(vue|js)$/,
            //     enforce: 'pre',
            //     exclude: /node_modules/,
            //     use: 'eslint-loader?cacheDirectory=true'
            // }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        // new HappyPack({
        //     id: 'jseslint',
        //     loaders: [
        //         'eslint-loader?cacheDirectory=true'
        //     ],
        //     threadPool: happyThreadPool,
        //     verbose: true
        // }),
        // new HtmlWebpackPlugin({
        //     template: resolvePath('document/index.html'),
        //     filename: 'document/index.html',
        //     chunks: ['document/index'],
        //     inject: true
        // }),
        new HtmlWebpackPlugin({
            template: resolvePath('mobile/index.html'),
            filename: 'mobile/index.html',
            chunks: ['mobile/index'],
            inject: true
        })
    ]
});

module.exports = devConfig;
