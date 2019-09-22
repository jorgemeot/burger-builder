module.exports = {
  entry: './src/index.js',
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
