const log = require("../utils/log");

let config = {
  host: "127.0.0.1",
  port: 7002,
  wx: {
    appId: "wx70a7b572525c4c84",
    appSecret: "c5a3329f61523b3ac9d491f9949b61a7",
    token: "c4mzwyjkq5p3r9zg",
    key: "NNztBwScKwbQZtSfNRkBxptBHAzSsX7F36d5F84N9Y2",
    callback: "http://wx.cnsixi.com/callback/success"
  }
};

let env = process.env.NODE_ENV || "development";

console.log("启用：***", env, "***环境配置....");

module.exports = Object.assign(config, require("./" + env));
