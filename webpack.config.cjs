const path = require( 'path' )

module.exports = {
  mode: 'development',
  entry: './public/static/scripts/reName.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  watch: true
}