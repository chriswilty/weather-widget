const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: path.resolve(__dirname, './public'),
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, './src'),
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ReactRefreshPlugin()
  ]
});