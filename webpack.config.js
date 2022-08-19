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
        use: ["babel-loader"],
      },
    ],
  },
};
