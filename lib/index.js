/* const yaml = require("js-yaml");
const fs = require("fs");

const config = yaml.load(fs.readFileSync("../_config.yml", "utf8"));

console.log(config); */

import "./styl/main.styl";
import "../node_modules/nprogress/nprogress.css";
import "../node_modules/zoom-image/css/zoom-image.css";

require("./js/utils");
require("./js/post-details")();
require("./js/scroll");
require("./js/since");
require("./js/title");
require("./js/type");
require("./js/submenu");
require("./js/clipboard");
require("./js/pjax");
require("./js/search");
require("./js/zoom")();
require("./js/move")();
