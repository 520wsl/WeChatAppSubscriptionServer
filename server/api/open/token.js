import { Router } from "express";

import tokenService from "../../service/tokenService";
import log from "../../utils/log";

const router = Router();

// 更新 access token
router.get("/update", async function(req, res, next) {
  try {
   
    let result = await tokenService.updateAccessToken();
    log.info(" 4、 【common 获取access token】 更新完成！");
    res.ok("Token 更新完成!", result);
  } catch (error) {
    res.bad_request(error);
  }
});

export default router;
