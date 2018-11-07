/*
 * @Author: Mad Dragon 395548460@qq.com 
 * @Date: 2018-11-06 17:42:36 
 * @Last Modified by: Mad Dragon
 * @Last Modified time: 2018-11-07 10:35:16
 * @explanatory:  token 服务
 */
import log from "../utils/log";
import wxsdk from "../utils/wxsdk";
import redis from "../db/redis";
import redisKey from "../enum/redisKey";

async function updateAccessToken() {
  try {
    // 获取 accessToken
    let accessToken = await wxsdk.common.token.api_token();
    redis.set(redisKey.token, accessToken.access_token);
    log.info(
      " 2. 【common 获取access token】 成功！\n\t",
      JSON.stringify(accessToken)
    );
    log.fatal(
      "-------------  ↑↑↑↑ 【common 获取access】 ↑↑↑↑  -----------------"
    );
    return true;
  } catch (ex) {
    log.error(" 2. 【common 获取access token】 失败！\n\t", JSON.stringify(ex));
    log.fatal(
      "-------------  ↑↑↑↑ 【common 获取access】 ↑↑↑↑  -----------------"
    );
    return false;
  }
}

export default {
  // 获取 accessToken
  updateAccessToken
};
