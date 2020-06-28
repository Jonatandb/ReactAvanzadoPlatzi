const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPWAManifestPlugin = require("webpack-pwa-manifest");
const path = require("path");

module.exports = {
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new WebpackPWAManifestPlugin({
      name: "Petgram - Tu app de fotos de mascotas",
      shortname: "Petgram 🐶 by Jonatandb",
      description:
        "Con Petgram puedes encontrar fotos de animales domésticos fácilmente",
      background_color: "#fff",
      theme_color: "#b1a",
      ios: true,
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512],
        },
        {
          src: path.resolve("src/assets/icon.png"),
          sizes: [120, 152, 167, 180, 1024],
          ios: true,
        },
        {
          src: path.resolve("src/assets/icon.png"),
          size: 1024,
          ios: "startup",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
