const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: {
    main: './lib/index.vue'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'VJsonschemaForm',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      //{
      //test: /\.js$/,
      //exclude: /(node_modules)/,
      //loader: 'babel-loader',
      //options: {
      //  presets: ['@babel/preset-env']
      //}
    //},
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            options: {}
          }
        }
      ]
      //loader: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ]
    }, {
      test: /\.less$/,
      loader: [ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader' ]
    }, {
      test: /\.(svg|eot|woff|ttf|woff2)$/,
      loader: [ 'file-loader' ]
    }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin()
  ]
}
