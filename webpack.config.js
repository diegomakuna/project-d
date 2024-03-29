const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry:'./src/index.js',
  output:{
      path:path.join(__dirname, "src", "index.js"),
      filename:'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
        
      },
      {
        test: /.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /.(jpg|jpeg|png|gif|mp3|svg|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash:8].[ext]"
            }
          }
          
        ]
       }
      ]
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      favicon: './src/assets/image/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  
  ]
};