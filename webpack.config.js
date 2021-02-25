// HtmlWebpackPlugin is not playing nicely with HMR!
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /\.yarn/,
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|svg)$/,
        type: 'asset/resource'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  plugins: [
    /*
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      favicon: './src/favicon.ico'
    }),
    */
    new Dotenv(),
    new ESLintPlugin({
      exclude: '.yarn',
      extensions: ['js', 'jsx'],
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, './src'),
    }
  }
};