'use strict';

let path = require('path');

const bundleFolder = "./wwwroot/assets/";
const srcFolder = "./App/";

module.exports = {
    entry: [
        'babel-polyfill',
        srcFolder + "index.jsx"
    ],
    devtool: "source-map",
    output: {
        filename: "bundle.js",
        publicPath: 'assets/',
        path: path.resolve(__dirname, bundleFolder)
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|gif|png)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        
    ]
};