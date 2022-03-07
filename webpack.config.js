const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@domain': path.join(__dirname, 'src/domain'),
      '@data': path.join(__dirname, 'src/data'),
      '@infrastructure': path.join(__dirname, 'src/infrastructure'),
      '@main': path.join(__dirname, 'src/main')
    },
    devServer: {
      // generate the bundle file in memory and runs the server
      contentBase: './public',
      writeToDisk: true,
      historyApiFallback: true
      // devServer executes the root of our project and only knows that route, then we create new routes login, signup
      // historyApiFallback allows react to map the right route (react-router-dom)
    },
    externals: {
      // this will allow to not include cdn react and react-dom scripts in our bundle as they are huge
      react: 'React',
      'react-dom': 'ReactDOM'
    }, // everything within externals is not going to be included in our bundle
    plugins: [
      new CleanWebpackPlugin()
    ]
  }
}
