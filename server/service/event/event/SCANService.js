import log from "../../../utils/log";
import customService from "../../message/customService";
//  用户已关注时的事件推送
async function SCAN(params) {
  log.info(
    "4.【扫描带参数二维码事件】--【用户已关注时的事件推送】 ",
    "\n\tparams:" + JSON.stringify(params)
  );
  if (!params.event_key) {
    log.error(
      " 5 .【扫描带参数二维码事件】--【用户已关注时的事件推送】--event_key异常",
      "\n\tparams:==>",
      JSON.stringify(params)
    );
    return;
  }
  let eventKey = JSON.parse(decodeURI(params.event_key));
  log.info(
    "5. 【扫描带参数二维码事件】--【用户已关注时的事件推送】--解析event_key \n\t",
    JSON.stringify(eventKey)
  );

  switch (eventKey.eventType) {
    // 扫描接收 扫客户订单二维码 确认收货接口
    case "ScanTakeDelivery":
      return await ScanTakeDelivery(eventKey, params.from_user_name);
      break;
    case "BindAdminAccountNumber":
      return await BindAdminAccountNumber(eventKey, params.from_user_name);
      break;
  }
}

// ScanTakeDelivery 事件处理接口 确认收货
async function ScanTakeDelivery(eventKey, fromUserName) {
  log.debug(
    "6.  【扫描带参数二维码事件】--【用户已关注时的事件推送】--ScanTakeDelivery 事件处理接口 确认收货 \n\t",
    JSON.stringify(eventKey),
    fromUserName
  );
  let params = {
    openid: fromUserName,
    msgtype: "text",
    content:
      "【扫描带参数二维码事件】--【用户已关注时的事件推送】 --ScanTakeDelivery 事件处理接口 确认收货"
  };
  return customService.sendHandler(params);
}
// BindAdminAccountNumber 事件处理接口 绑定管理员账号
async function BindAdminAccountNumber(eventKey, fromUserName) {
  log.debug(
    "6.  【扫描带参数二维码事件】--【用户已关注时的事件推送】 --BindAdminAccountNumber 事件处理接口 绑定管理员账号 \n\t",
    JSON.stringify(eventKey),
    fromUserName
  );
  let params = {
    openid: fromUserName,
    msgtype: "text",
    content:
      "【扫描带参数二维码事件】--【用户已关注时的事件推送】--BindAdminAccountNumber 事件处理接口 绑定管理员账号"
  };
  return customService.sendHandler(params);
}
export default {
  SCAN
};
