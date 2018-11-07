/*
 * @Author: Mad Dragon 395548460@qq.com 
 * @Date: 2018-11-06 21:25:04 
 * @Last Modified by: Mad Dragon
 * @Last Modified time: 2018-11-07 09:43:47
 * @explanatory:  客服接口 - 发消息
 */
import log from "../../utils/log";
import wxsdk from "../../utils/wxsdk";
import redis from "../../db/redis";
import redisKey from "../../enum/redisKey";

async function sendHandler(params) {
  log.info("1. 【客服接口 - 发消息 】 获取 redis token");
  let accessToken = await redis.get(redisKey.token),
    openid = params.openid,
    content = params.content,
    msgtype = params.msgtype;

  switch (msgtype) {
    case "text":
      return wxsdk.message.custom.api_send_text(openid, accessToken, content);
      break;
  }
}
export default {
  // 客服接口 - 发消息
  sendHandler
};
