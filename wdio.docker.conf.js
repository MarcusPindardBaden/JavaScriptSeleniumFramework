const merge = require("deepmerge");
const wdioConf = require("./wdio.conf.js");

exports.config = merge(wdioConf.config, {
  // Selenium Hub in Docker setup
  host: "selenium-hub", // Needs to match service name in docker-compose
  port: 4444,
  path: "/wd/hub",
});