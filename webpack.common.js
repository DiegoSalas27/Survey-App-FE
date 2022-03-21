const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main-bundle-[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'],
    alias: {
      '@domain': path.join(__dirname, 'src/domain'),
      '@data': path.join(__dirname, 'src/data'),
      '@infrastructure': path.join(__dirname, 'src/infrastructure'),
      '@presentation': path.join(__dirname, 'src/presentation'),
      '@main': path.join(__dirname, 'src/main'),
      '@validation': path.join(__dirname, 'src/validation')
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
