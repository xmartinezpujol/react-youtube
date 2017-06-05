var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['react', 'es2015', 'stage-1'] },
        }],
        // exclude: /node_modules/,
        // loader: 'babel-loader',
        // query: {
        //   presets: ['react', 'es2015', 'stage-1']
        // }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port:3000,
    stats: 'errors-only',
    open: true
  },
  plugins: [
    new ExtractTextPlugin({
        filename: 'app.css',
        disable: false,
        allChunks: true
    })
    //if you want to pass in options, you can do so:
    //new ExtractTextPlugin({
    //  filename: 'style.css'
    //})
  ]
};
