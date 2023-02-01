const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir, file = '') {
  return path.resolve(__dirname, './', dir, file)
}

const reactVersion = 'react18' // react16 | react18

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
      'shim-react': resolve(`shim-${reactVersion}/src/index.ts`)
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
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