/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2018-11-06 16:27:22
 * @LastEditTime: 2018-11-06 17:08:16
 * @LastEditors: your name
 */

import fetch from "../fetch";
import { config } from "../config";
import log from "../../log";
import redis from "../../../db/redis";
import redisKey from "../../../enum/redisKey";

/**
 * 第三方组件API
 */
function wx_api(method, api_name, api_param) {
  return fetch(
    method,
    "https://api.weixin.qq.com/cgi-bin/qrcode/{0}".format(api_name),
    api_param
  );
}

// 微信 GET 请求 API
function wx_get(api_name, api_param) {
  return wx_api("GET", api_name, api_param);
}

// 微信 POST 请求 API
function wx_post(api_name, api_param) {
  return wx_api("POST", api_name, api_param);
}

// https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=15_BgetxHEH7qMDjXXyvxvxdbsgzaY6n3ejzRv4DbXz0mxUdtPFVnF0khNV83CcEXiTLM9r7-Q3nzpu3TImzB7JU3KEZQzgOleEGZ5B5Dx3VC9qe96fiFOrUuchfj0Qy_d9I2AMWCDpgW8E8t87QDChAAAHUT
// {
//     "expire_seconds":604800,
//     "action_name":"QR_STR_SCENE",
//     "action_info":{
//         "scene":{
//             "scene_str":"%7B%22OrderID%22:76,%22OrderNumber%22:%22201611211627424812685420%22,%22CustomID%22:91,%22UserID%22:4357%7D"
//         }
//     }
// }
// 创建二维码 ticket
function api_qrcode_create(access_token, scene_str) {
  log.info(
    "3. 【创建 二维码 】调用微信接口",
    "\n\taccess_token:" + access_token,
    "\n\tscene_str:" + JSON.stringify(decodeURI(scene_str))
  );
  return wx_post("create?access_token=" + access_token, {
    expire_seconds: 604800,
    action_name: "QR_STR_SCENE",
    action_info: {
      scene: {
        scene_str
      }
    }
  });
}

export default {
  // 获取 二维码
  api_qrcode_create
};
