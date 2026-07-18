import winston from "winston";
import config from "./index.js";

const transports = [
  new winston.transports.Console(), // Always log to Render console
];

if (config.node_env !== "production") {
  transports.push(
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "logs/combined.log",
    })
  );
}

const logger = winston.createLogger({
  level: config.node_env === "production" ? "info" : "debug",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  defaultMeta: { service: "api-monitoring" },
  transports,
});

export default logger;