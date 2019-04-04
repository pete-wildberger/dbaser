const path = require('path');

module.exports = [
  {
    name: 'dev',
    entry: './src/dbaser.ts',
    mode: 'development',
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    output: {
      path: path.join(__dirname, '/lib'),
      filename: 'dbaser.dev.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader'
        }
      ]
    },
    optimization: {
      usedExports: true
    }
  },
  {
    name: 'prod',
    entry: './src/dbaser.ts',
    mode: 'production',
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    output: {
      path: path.join(__dirname, '/lib'),
      chunkFilename: '[id].bundle.js',
      filename: 'dbaser.production.min.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader'
        }
      ]
    }
  }
];
