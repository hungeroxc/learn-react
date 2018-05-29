const path = require('path')

module.exports = {
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        port: 4399
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    }
}
