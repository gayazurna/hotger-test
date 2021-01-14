const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const ENV = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
}

module.exports = (env) => {
  const config = {
    entry: {
      app: path.resolve(__dirname, './src/index.jsx'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
        filename: './index.html',
      }),
    ],
    resolve: { extensions: ['.js', '.jsx'] },
    optimization: {
      minimize: false,
      minimizer: [],
      // splitChunks: {
      //     chunks: 'async',
      //     minChunks: 1,
      //     cacheGroups: {
      //         defaultVendors: {
      //             test: /[\\/]node_modules[\\/]/,
      //             priority: -10,
      //             reuseExistingChunk: true
      //         },
      //     },
      // }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: [path.resolve(__dirname, './src')],
          use: {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
          },
        },
        {
          test: /\.(png|gif|jpe?g)$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  }

  if (env === ENV.DEVELOPMENT) {
    config.mode = ENV.DEVELOPMENT
    config.devServer = {
      contentBase: path.resolve(__dirname, './dist'),
      open: true,
      hot: true,
    }
  }

  if (env === ENV.PRODUCTION) {
    config.mode = ENV.PRODUCTION
    config.optimization.minimize = true

    config.optimization.minimizer.push(
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      })
    )
  }

  return config
}
