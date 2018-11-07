import { Router } from "express";
import log from "../utils/log";

const router = Router();

// router.get("/", async function(req, res, next) {
//   // let appid = req.params.appid;
//   // let result = req.body,
//   //   minaInfo;
//   // log.info("callback--api-get:*==>", req.body, req.params, req.query);
//   // 消息类型
//   log.info(
//     "Callback--",
//     "MsgType:*==>",
//     req.body.msg_type,
//     "scene_key:*==>",
//     req.body.scene_key
//   );
//   res.send(req.query.echostr);
// });

router.post("/", async function(req, res, next) {
  let appid = req.params.appid;
  let result = req.body;
  //   minaInfo;
  log.info("callback--api-post:*==>", req.body, req.query);
  // 消息类型
  log.info(
    "Callback--",
    "MsgType:*==>",
    req.body.msg_type,
    " |  event_key:*==>",
    req.body.event_key
  );
  log.debug("decodeURI", decodeURI(req.body.event_key));
  res.send(req.query.echostr);
});

export default router;
