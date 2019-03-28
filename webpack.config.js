const path = require("path");
const P1 = require("./plugin/P1.js");
const P2 = require("./plugin/P2.js");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          path.resolve(__dirname, "loader", "style-loader"),
          path.resolve(__dirname, "loader", "less-loader")
        ]
      }
    ]
  },
  plugins: [new P1(), new P2()]
};
