/*
 * @Author: Mad Dragon 395548460@qq.com 
 * @Date: 2018-11-06 17:42:36 
 * @Last Modified by: Mad Dragon
 * @Last Modified time: 2018-11-06 20:02:36
 * @explanatory:  创建 二维码
 */
import log from "../../utils/log";
import wxsdk from "../../utils/wxsdk";
import redis from "../../db/redis";
import redisKey from "../../enum/redisKey";

// 创建二维码 ticket
async function qrcodeCreate(sceneStr) {
  log.info("2. 【创建 二维码 】 获取 redis token")
  let accessToken = await redis.get(redisKey.token);
  return await wxsdk.qrcode.create.api_qrcode_create(accessToken, sceneStr);
}

export default {
  // 创建二维码 ticket
  qrcodeCreate
};
