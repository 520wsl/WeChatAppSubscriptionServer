/*
 * @Author: Mad Dragon 395548460@qq.com 
 * @Date: 2018-11-06 17:42:11 
 * @Last Modified by: Mad Dragon
 * @Last Modified time: 2018-11-07 09:43:45
 * @explanatory:  客服接口
 */
import fetch from "../fetch";
import log from "../../log";

// 微信 GET 请求 API
function wx_get(api_name, access_token, api_param) {
  return wx_api("GET", api_name, access_token, api_param);
}

// 微信 POST 请求 API
function wx_post(api_name, access_token, api_param) {
  return wx_api("POST", api_name, access_token, api_param);
}
/**
 * 第三方组件API
 */
function wx_api(method, api_name, access_token, api_param) {
  return fetch(
    method,
    "https://api.weixin.qq.com/cgi-bin/message/custom/{0}?access_token={1}".format(
      api_name,
      access_token
    ),
    api_param
  );
}

// https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=ACCESS_TOKEN
// 客服接口-发消息-发送文本消息
function api_send_text(openid, access_token, textStr) {
  log.info(
    "  2. 【客服接口-发消息】-- 发送文本消息！",
    "\n\topenid:" + openid,
    "\n\ttextStr:" + textStr
  );

  return wx_post("send", access_token, {
    touser: openid,
    msgtype: "text",
    text: {
      content: textStr
    }
  });
}

// https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=ACCESS_TOKEN
// 客服接口-发消息-发送图片消息
function api_send_image(openid, access_token, media_id) {
  log.info(
    "  2. 【客服接口-发消息】-- 发送图片消息！",
    "\n\topenid:" + openid,
    "\n\tmedia_id:" + media_id
  );

  return wx_post("send", access_token, {
    touser: openid,
    msgtype: "image",
    image: {
      content: media_id
    }
  });
}

export default {
  // 客服接口-发消息-发送文本消息
  api_send_text,
  // 客服接口-发消息-发送图片消息
  api_send_image
};
