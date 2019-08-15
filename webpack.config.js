const HtmlSWebPackPlugin = require('html-webpack-plugin')

const HtmlPlugin = new HtmlSWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
})
module.exports = {
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }

            }
        ]
    },
    plugins:[HtmlPlugin]
}