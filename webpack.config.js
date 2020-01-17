const path = require('path');

module.exports = {
  entry: './src/app.ts',
  module: {
    rules: [
      {
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  output: {
    filename: 'accordion.js',
    path: path.resolve(__dirname, 'dist'),
  },
};