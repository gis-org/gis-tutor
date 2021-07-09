const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
 const isDev=process.env.NODE_ENV=='development'
module.exports = {
  publicPath:isDev?'/':'"/gis-tutor"',
  chainWebpack: (config) => {
    config.resolve.alias.set("@api", resolve("src/api"));
  },
  devServer: {
    port: 9080,
  },
};
