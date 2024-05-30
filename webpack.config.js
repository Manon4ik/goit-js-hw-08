const path = require('path')

module.exports = {
    entry: './js/main.js',
    mode: 'production',
    module: {
        rules: [
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.min.js',
        clean: true
    },
}