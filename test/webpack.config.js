var path = require('path');
var projectPath = path.resolve(path.join(__dirname, '..'));

module.exports = {
  entry: ['mocha!./test/index.js'],
  output: {
    filename: 'test.js',
  },
  resolve: {
    root: [
      path.resolve(projectPath, 'node_modules'),
    ],
  },
  resolveLoader: {
    root: [
      path.resolve(projectPath, 'node_modules'),
    ],
  },
  context: projectPath,
  devServer: {
    port: 3000,
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.json$/,
        loader: 'json',
        hot: true,
        inline: true,
      },
    ],
  },
};
