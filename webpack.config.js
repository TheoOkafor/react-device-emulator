const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /(\.s[ac]ss$|\.css$)/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|gif|png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'file-loader?name=images/[name].[ext]',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.(js|jsx)$/,
        use: ['eslint-loader']
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
