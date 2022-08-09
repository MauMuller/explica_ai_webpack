const path = require("path");

module.exports = {
  //Babel
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    liveReload: true,
  },
};
