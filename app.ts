import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
// import APILimiter from './middleware/limit';
import morgan from "morgan";
import fs from "fs";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import db from "./models";
import APILimiter from "./src/middleware/limit";
import CustomerRouter from "./src/customer/customerRouter";
const app: Application = express();

const port: number = 3308;
const { sequelize } = db;

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err: any) => {
    console.error(err);
  });
app.use(express.json());
app.use(
  morgan("combined", {
    stream: fs.createWriteStream("./access.log", { flags: "a" }),
  })
);

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});

app.use("/customer", APILimiter, CustomerRouter);
