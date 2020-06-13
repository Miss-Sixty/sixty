const fs = require("fs");
const path = require("path");

const EXCLUDES = ["index.js", "index.scss", "style", "utils"];

module.exports = function () {
  const src = path.resolve(__dirname, "../src");
  const dirs = fs.readdirSync(src);
  return dirs.filter((dir) => !EXCLUDES.includes(dir));
};
