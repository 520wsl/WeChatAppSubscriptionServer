import log4js from "log4js";
// Config log4js
log4js.configure({
  appenders: {
    accessfile: {
      type: "file",
      filename: "access.log"
    },
    msgfile: {
      type: "file",
      filename: "message.log"
    },
    console: {
      type: "console"
    }
  },
  categories: {
    default: {
      appenders: ["accessfile", "console"],
      level: "info"
    },
    message: {
      appenders: ["msgfile", "console"],
      level: "debug"
    }
  }
});

export default function(app) {
  app.use(
    log4js.connectLogger(log4js.getLogger("default"), {
      level: "auto"
    })
  );
}
