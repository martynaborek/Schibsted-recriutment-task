const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

module.exports= {
    entry: {
        index: './src/index.tsx',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader:'file-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        contentBase: './dist',
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'src/index.html'}),
        new HtmlWebpackInlineSVGPlugin()
    ],
};

