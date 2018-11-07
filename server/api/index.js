import { Router } from "express";
import fs from "fs";

function search(root, dir, router) {
  let list = fs.readdirSync(dir)
  list.forEach(function (file) {
      let path = dir + '/' + file
      let stat = fs.statSync(path)
      let routerPath = '/' + file.split('.')[0]
      if (stat && stat.isDirectory()) {
          router.use(routerPath, search(root, path, Router()))
      } else {
          let modulePath = dir.replace(root, '') + routerPath
          // 此处require(...)必写字符串 + 变量的形式
          let routerModule = require('.' + modulePath).default
          // console.log(path,typeof routerModule, routerPath)
          if (routerModule) {
              router.use(routerPath === "/index" ? "" : routerPath, routerModule)
          }
      }
  })
  return router
}
export default search(__dirname, __dirname, Router());
