const path = require('path');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const autoprefixer = require('autoprefixer');

const resolvePath = (dir) => {
    return path.resolve(__dirname, '../', dir);
};

let baseConfig = {
    resolve: {
        alias: {
            packages: resolvePath('packages'),
            lib: resolvePath('lib'),
            src: resolvePath('src'),
            data: resolvePath('data'),
            'vue': 'vue/dist/vue.esm.js'
        },
        extensions: ['.js', '.scss', '.css', '.vue', '.json', '.ts'],
        modules: ['node_modules']
    },
    performance: false,
    stats: {
        colors: true,
        chunks: false,
        children: false,
        entrypoints: false,
        modules: false
    },
    module: {
        rules: [
            {
                test: /\.md$/i,
                use: [
                    'vue-loader',
                    {
                        loader: 'vue-markdown-loader/lib/markdown-compiler',
                        options: {
                            raw: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 20,
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|svg)(\?[a-z0-9#]*)?$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1,
                            name: 'fonts/[name].[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                css: 'vue-style-loader!css-loader?sourceMap',
                                scss: 'vue-style-loader!css-loader?sourceMap!sass-loader'
                            },
                            postcss: [
                                autoprefixer({
                                    remove: false
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new ProgressBarWebpackPlugin(),
        new VueLoaderPlugin()
    ]
};

module.exports = baseConfig;
