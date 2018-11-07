import bluebird from "bluebird";
import redis from "redis";

import log from "../utils/log";
import config from "../config";

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

var redisConfig = config.db.redis;
var client = redis.createClient(
  redisConfig.port,
  redisConfig.host,
  redisConfig.option
);

client.select(redisConfig.database);

client.on("ready", res => {
  log.info(
    "[REDIS] connection " +
      redisConfig.host +
      ":" +
      redisConfig.port +
      " DB:" +
      redisConfig.database
  );
});

function get(key) {
  return client.getAsync(key);
}

function mget(key) {
  return client.mgetAsync(key);
}

function set(...param) {
  return client.setAsync(...param);
}

function del(key) {
  return client.delAsync(key);
}

export default {
  client,
  get,
  set,
  mget,
  del
};
