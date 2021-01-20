module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/',
    filename: 'bundle.js',
  },
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
