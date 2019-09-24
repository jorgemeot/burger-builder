module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  devServer: { contentBase: './public' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|ttf)$/,
        use: 'file-loader'
      }
    ]
  }
}
