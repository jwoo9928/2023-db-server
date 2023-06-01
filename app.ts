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
import RentCarRouter from "./src/rentcar/rentCarRouter";
import ReserveHistoryRouter from "./src/reserveHistory/ReserveHistoryRouter";
import ReserveRouter from "./src/reserve/ReserveRouter";
const app: Application = express();

const port: number = 3308;
const { sequelize } = db;

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("success conenct to mysql database!!");
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
app.use("/rentcar", RentCarRouter);
app.use("/rental/history", ReserveHistoryRouter);
app.use("/reservation", ReserveRouter);

/*
필요기능
1. 로그인 (완료)
2. 렌터카 검색 (완료)
3. 렌터카 예약 / 취소 (완료?)
4. 렌터카 대여 / 반납 (완료)
5. 이전, 현재 대여 내역 (완료)
6. 관리자 계정 페이지 (쿼리 3개)
7. email (반납 안내)
*/
