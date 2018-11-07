import weixinBodyParser from 'weixin-body-parser';
import config from '../config';
import wxsdk from '../utils/wxsdk';

let wxConfig = config.wx;
wxsdk.configure(wxConfig);

export default function (app) {
  app.use(weixinBodyParser({
    app_id: wxConfig.appId,
    token: wxConfig.token,
    encrypt_key: wxConfig.key
  }));
}
