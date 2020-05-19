const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

const config = ({ mode }) => {
  return {
    mode: mode,
    entry: "./src/main.js",
    output: {
      path: __dirname + "/build/",
      filename: "main.js",
      publicPath: "http://192.168.56.1:65039/"
    },
    module: {
      rules: [{
        test: /\.m?js$/,
        use: {
          loader: "babel-loader"
        }
      }]
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "app2",
        filename: "remoteEntry.js",
        exposes: {
          'HRemoteLabel':'./src/webcomponents/index.js'
        }
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: "head"
      }),
    ],
  };
};

module.exports = config;
