const express = require("express");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");

const patch = require("./patch");
const configs = require("./config");
const log = require("./utils/log");

const app = express();
const host = process.env.HOST || configs.host || "127.0.0.1";
const port = process.env.PORT || configs.port || 3000;


process.on("unhandledRejection", function(error) {
  log.error(error);
});

app.set("port", port);

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);

  log.info("Server listening on  http://{0}:{1}".format(host, port)); // eslint-disable-line no-console

  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();
