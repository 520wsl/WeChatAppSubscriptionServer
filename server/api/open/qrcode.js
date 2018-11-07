import axios from "axios";
import { Router } from "express";
import redis from "../../db/redis";
import redisKey from "../../enum/redisKey";
import createService from "../../service/qrcode/createService";
import tokenService from "../../service/tokenService";
import log from "../../utils/log";

const router = Router();

// 创建二维码 ticket
router.post("/create", async function(req, res, next) {
  create(req, res, next, create);
});

async function create(req, res, next, cb) {
  try {
    let ticket = await qrcodeCreate(req);
    if (ticket) {
      res.ok("二维码创建成功!", ticket);
    }
  } catch (error) {
    log.info("4. 【创建 二维码】 二维码创建失败\n\t", error);
    log.fatal("-------------  ↑↑↑↑ 【创建 二维码】 ↑↑↑↑  -----------------")
    if (error && (error.errcode == 42001 || error.errcode == 40001)) {
      console.log(42001);
      let result = await tokenService.updateAccessToken();
      if (result) {
        let ticket = await qrcodeCreate(req);
        if (ticket) {
          res.ok("二维码创建成功!", ticket);
          return;
        }
      }
      res.bad_request("二维码 创建失败,请重试！");
    }
    return;
  }
}

async function qrcodeCreate(req) {
  log.fatal("-------------  ↓↓↓↓ 【创建 二维码】 ↓↓↓↓ -----------------")
  log.info("1. 【创建 二维码】 验证参数");
  if (!req.body || !req.body.sceneStr) {
    res.forbidden("参数不能为空:sceneStr");
    return;
  }
  let sceneStr = req.body.sceneStr || "";
  let result = await createService.qrcodeCreate(sceneStr);
  if (result && result.ticket) {
    log.info("4. 【创建 二维码 】二维码创建成功");
    log.fatal("-------------  ↑↑↑↑ 【创建 二维码】 ↑↑↑↑  -----------------")
    return (
      "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + result.ticket
    );
  }
  return;
}
export default router;
