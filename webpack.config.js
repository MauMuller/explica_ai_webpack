const path = require("path");

module.exports = {
  //Entry
  entry: "./src/index.js",

  //Output
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  //Babel
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
};
