const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  entry: {
    index: utils.resolve('src/index.js')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: utils.resolve(),
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      title: 'React demo ',
      template: utils.resolve('src/index.html')
    })
  ],
  output: {
    path: utils.resolve('dist'),
    filename: '[name].bundle.[hash:5].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}

module.exports = config
