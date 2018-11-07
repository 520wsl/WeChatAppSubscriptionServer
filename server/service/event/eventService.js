/*
 * @Author: Mad Dragon 395548460@qq.com 
 * @Date: 2018-11-06 17:45:14 
 * @Last Modified by: Mad Dragon
 * @Last Modified time: 2018-11-06 22:00:40
 * @explanatory:  【接收事件推送】 事件处理机制
 */
import log from "../../utils/log";
import SCAN from "./event/SCANService";

async function eventHandler(params) {
  let event = params.event;
  log.info("2.【接收事件推送】--事件处理机制: \n\t", "event：" + event);
  switch (event) {
    case "subscribe":
      log.info(
        "3.【扫描带参数二维码事件】--关注事件: \n\t",
        "event：事件类型，subscribe(订阅)"
      );
      break;
    case "unsubscribe":
      log.info(
        "3.【扫描带参数二维码事件】--取消关注事件: \n\t",
        "event：事件类型，unsubscribe(取消订阅)"
      );
      break;
    case "SCAN":
      log.info("3.【扫描带参数二维码事件】--用户已关注时的事件推送: \n\t");
      return SCAN.SCAN(params);
      break;
    case "CLICK":
      log.info(
        "3.【自定义菜单事件】--点击菜单拉取消息时的事件推送: \n\t",
        "event：事件类型，CLICK"
      );
      break;
    case "VIEW":
      log.info(
        "3.【自定义菜单事件】--点击菜单跳转链接时的事件推送: \n\t",
        "event：事件类型，VIEW"
      );
      break;
  }
}
export default {
  // 扫描带参数二维码事件
  eventHandler
};
