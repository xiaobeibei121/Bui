const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = require('./config.js');

let prodConfig = webpackMerge(baseWebpackConfig, {
    entry: config.entries,
    output: {
        path: config.libRootPath,
        publicPath: config.publicPath,
        filename: '[name].js',
        library: 'Bui',
        globalObject: 'this',
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    module: {
        rules: [
            {
                test: /\.(c|sa|sc)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
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
    optimization: {},
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            moduleFilename: ({ name }) => {
                console.log(name);
                return `${name.replace(/index/, 'style')}.css`;
            }
        })
    ]
});

module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        prodConfig.optimization.minimizer = [
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    discardComments: {
                        removeAll: true
                    }
                },
                canPrint: false
            }),
            new UglifyJsPlugin({
                test: /\.js$/,
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: {
                        drop_debugger: true,
                        drop_console: true,
                        unused: false
                    }
                }
            })
        ];
    } else {
        prodConfig.devtool = 'source-map';
    }

    return prodConfig;
};
