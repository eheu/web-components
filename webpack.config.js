const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const config = ({ mode }) => {
  return {
    mode: mode,
    entry: "./src/main.js",
    output: {
      path: __dirname + "/build/",
      filename: "main.js",
      publicPath: "http://localhost:3001/",
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: "head",
      }),
      new ModuleFederationPlugin({
        name: "app_two",
        filename: "remoteEntry.js",
        library: { type: "var", name: "app_two" },
        exposes: {
          HRemoteLabel: "./src/webcomponents/h-remote-label",
        },
      }),
    ],
  };
};

module.exports = config;
