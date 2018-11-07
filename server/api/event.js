import axios from "axios";
import { Router } from "express";
import log from "../utils/log";
import eventService from "../service/event/eventService";
import tokenService from "../service/tokenService";

const router = Router();

router.get("/", async function(req, res, next) {
  log.info("eventService--get:====****", req.query);
  //   res.send("success");
  res.send(req.query.echostr);
});

router.post("/", async function(req, res, next) {
  console.log(req.originalUrl);
  let result = req.body;
  try {
    // 消息类型
    log.info(
      "1.【接收事件推送】--消息通知 ：",
      "\n\tmsgType:",
      result.msg_type,
      "\n\tBody:",
      JSON.stringify(result)
    );
    await event(result);
    res.send("success");
  } catch (error) {
    log.info("4. 【接收事件推送】--消息通知\n\t", error);
    if (error && (error.errcode == 42001 || error.errcode == 40001)) {
      console.log(42001);
      let tokenstatus = await tokenService.updateAccessToken();
      if (tokenstatus) {
        await event(result);
      }
      res.send("error");
    }
    return;
  }
});

async function event(result) {
  switch (result.msg_type) {
    // 事件
    case "event":
      return await eventService.eventHandler(result);
      break;
  }
}
export default router;
