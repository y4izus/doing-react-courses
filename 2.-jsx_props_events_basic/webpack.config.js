module.exports = {
   entry: `./src/App.js`,
   output: {
      path: `${__dirname}/dist`,
      filename: `bundle.js`
   },
   module: {
      rules: [{
         test: /\.js*/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         options: {
            presets: ['es2015', 'react'],
            plugins: ['react-hot-loader/babel'],
         }
      }]
   },
   devServer: {
      contentBase: `${__dirname}/dist`
   }
}