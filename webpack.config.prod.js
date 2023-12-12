const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',


    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot:false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
            template: "./src/index.html"
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
};