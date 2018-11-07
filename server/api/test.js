import { Router } from "express";
import log from "../utils/log";

let router = Router();

router.get("/", async function(req, res, next) {
  log.info("test", req.query);
  //   res.send("success");
  res.send('<xml> <ToUserName>< ![CDATA[toUser] ]></ToUserName> <FromUserName>< ![CDATA[fromUser] ]></FromUserName> <CreateTime>12345678</CreateTime> <MsgType>< ![CDATA[text] ]></MsgType> <Content>< ![CDATA[你好] ]></Content> </xml>')
});
export default router;
