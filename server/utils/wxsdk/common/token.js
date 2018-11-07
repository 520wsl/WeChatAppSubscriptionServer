/*
 * @Author: Mad Dragon 395548460@qq.com 
 * @Date: 2018-11-06 17:42:11 
 * @Last Modified by: Mad Dragon
 * @Last Modified time: 2018-11-06 20:00:08
 * @explanatory:  获取token
 */
import fetch from "../fetch";
import { config } from "../config";
import log from "../../log";

// 微信 GET 请求 API
function wx_get(api_name, api_param) {
  return wx_api("GET", api_name, api_param);
}

// 微信 POST 请求 API
function wx_post(api_name, api_param) {
  return wx_api("POST", api_name, api_param);
}
/**
 * 第三方组件API
 */
function wx_api(method, api_name, api_param) {
  return fetch(
    method,
    "https://api.weixin.qq.com/cgi-bin/{0}".format(api_name),
    api_param
  );
}

// https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx54c9db07a722c304&secret=448a6bb6c202bf2ff61f99394a1981cc
// 获取 access_token
function api_token() {
  log.info("  1. 【common 获取access】 获取 微信 配置！\n\t", JSON.stringify(config));

  return wx_get("token", {
    grant_type: "client_credential",
    appid: config.appId,
    secret: config.appSecret
  });
}

export default {
  // 获取 access_token
  api_token
};
