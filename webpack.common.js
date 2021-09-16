const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
    
  },
};