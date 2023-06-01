import express, { Request, Response, NextFunction } from "express";
import RentCarController from "./rentCarController";

const RentCarRouter = express.Router();
RentCarRouter.get("/searchcar/", RentCarController.searchRentCar);
RentCarRouter.post("/rent", RentCarController.rentRentCar);
RentCarRouter.post("/return", RentCarController.returnRentCar);

export = RentCarRouter;
