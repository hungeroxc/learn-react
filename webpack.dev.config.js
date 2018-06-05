const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    // 需要分离的代码所在位置
                    test: /[\\/]node_modules[\\/]/,
                    // 打包出来后的文件名
                    name: 'common',
                    // 缓存组优先级
                    priority: 10,
                    // 缓存方式all | initial | async三选一
                    chunks: 'all'
                }
            }
        }
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                use: ExtractTextWebapckPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }),
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        port: 5000
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new CleanWebpackPlugin(['dist']),
        new ExtractTextWebapckPlugin('css/[name].[hash].css')
    ]
}
