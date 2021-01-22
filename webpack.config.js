const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
 /* plugins: [
    new BundleAnalyzerPlugin()
  ],*/
  module: {
    rules: [ 
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
           
    ],
  },
  
  
};
