const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("@api", resolve("src/api"));
  },
  devServer: {
    port: 9080,
  },
};
