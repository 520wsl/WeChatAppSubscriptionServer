import log from "../utils/log";

let config = {
  host: "127.0.0.1",
  port: 7002,
  wx: {
    appId: "wx54c9db07a722c304",
    appSecret: "448a6bb6c202bf2ff61f99394a1981cc",
    token: "123456",
    key: "NNztBwScKwbQZtSfNRkBxptBHAzSsX7F36d5F84N9Y2",
    callback: "http://wx.cnsixi.com/callback/success"
  },
  db: {
    redis: {
      host: "192.168.2.202",
      port: 6379,
      option: {},
      database: 8
    },
    mysql: {
      host: "192.168.2.200",
      port: 3306,
      user: "root",
      password: "root",
      database: "wxapp",
      dialect: "mysql"
    }
  }
};

let env = process.env.NODE_ENV || "development";

log.debug("启用：***", env, "***环境配置....");

module.exports = Object.assign(config, require("./" + env));
