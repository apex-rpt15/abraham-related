const path = require('path');

module.exports = {
  entry: './client/App.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.(jsx|js)$/,
      include: [path.resolve(__dirname, './client')],
      exclude: /node_modules/,
      use: ['babel-loader']
    }],
  }
};