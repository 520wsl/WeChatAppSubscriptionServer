import { config, configure } from "./config";
import common from "./common";
import qrcode from "./qrcode";
import message from "./message";

export default {
  // 常用接口
  common,
  // 二维码 接口
  qrcode,
  // 客服接口-发消息
  message,
  // 配置设置
  configure
};
