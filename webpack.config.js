const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

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

        {
          test: /\.css$/i,
          use: ["to-string-loader", "css-loader"],
        },

        {
          test: /\.html$/i,
          loader: "html-loader",
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/main.html",
        inject: "head",
      }),
      
      new ModuleFederationPlugin({
        name: "webComponents",
        filename: "remoteEntry.js",
        library: { type: "var", name: "webComponents" },
        exposes: {
          WebCounter: "./src/components/web/web-counter",
        },
      }),
    ],
  };
};

module.exports = config;
