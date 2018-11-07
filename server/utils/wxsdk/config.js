var config = {
  appId: '',
  appSecret: '',
  token: '',
  key: '',
  callback: '',
}

function configure(cfg) {
  config = Object.assign(config, cfg)
}

export {
  // 设置配置
  configure,
  // 初始化配置
  config
}
