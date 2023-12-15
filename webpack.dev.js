const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const jsLoaders = () => {
//
// }
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        // Добавлен MiniCssExtractPlugin
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders()

            },
        ],
    },
});