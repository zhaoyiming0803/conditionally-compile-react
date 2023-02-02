const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

function resolve(dir, file = '') {
  return path.resolve(__dirname, './', dir, file)
}

const reactVersion = '18' // 16 | 18

module.exports = {
  mode: 'development',
  entry: resolve('src', 'index.tsx'),
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'shim-react': resolve(`shim-react${reactVersion}`),
      'react': resolve(`shim-react${reactVersion}/node_modules/react`),
      'react-dom': resolve(`shim-react${reactVersion}/node_modules/react-dom`),
      'shim-antd': resolve(`shim-${reactVersion === '18' ? 'antd5' : 'antd4'}`)
    }
  },
  externals: {
    React: 'react',
    ReactDOM: 'react-dom'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./index.html'),
      filename: 'index.html',
      env: process.env.NODE_ENV,
      reactVersion,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'guard.min.css'
    }),
    new webpack.DefinePlugin({
      __react_version__: JSON.stringify(reactVersion)
    })
  ],
  devServer: {
    host: 'localhost',
    inline: false, // 启用热更新
    port: 3002,
    progress: true,
    contentBase: resolve('./'),
    compress: true,
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    openPage: '../'
  }
}