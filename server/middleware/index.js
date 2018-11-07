import weixinBodyParser from "./weixin-body-parser";
import common from "./common";
import log4js from "./log4js";

export default {
  beforeRouter: function(app) {
    weixinBodyParser(app);
    log4js(app);
    common(app);
  },
  afterRouter: function(app) {}
};
