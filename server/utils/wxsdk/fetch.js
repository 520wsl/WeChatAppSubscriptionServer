import axios from 'axios'
import log from '../log'
import code from './code.json';

/**
 * 通用API
 */
function fetch(method = 'POST', api_url, api_param) {
  return new Promise((resolve, reject) => {
    for (var i in api_param) {
      if (api_param[i] === undefined) {
        reject('WXAPI ERR: 必填参数 ' + i + ' 不存在! ' + 'API地址: ' + api_url + ' 参数: ' + JSON.stringify(api_param))
        return;
      }
    }
    let config = {
      method: method.toLowerCase(),
      url: api_url
    };
    config[method == 'POST' ? 'data' : 'params'] = api_param;
    axios.request(config)
      .then(function (response) {
        let result = response.data;
        log.debug('WXAPI URL:', api_url);
        log.debug('WXAPI Request:', JSON.stringify(api_param));
        log.debug('WXAPI Respone:', JSON.stringify(result));
        if (result.errcode && result.errcode !== 0) {
          let msg = code[result.errcode] || result;
          if (result.errcode === 85004 || result.errcode === 85009 || result.errcode === 89231 || result.errcode === 42001|| result.errcode === 40001) {
            reject({msg, errcode: result.errcode})
            return
          } else if (result.errcode === 85052) {
            reject({msg, errcode: 85052})
            return
          }
          reject(msg)
        } else {
          resolve(result)
        }
      }).catch(response => {
        reject(response)
      })
  });
}
export default fetch
