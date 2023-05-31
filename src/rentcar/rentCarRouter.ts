import express, { Request, Response, NextFunction } from "express";
import RentCarController from "./rentCarController";

const RentCarRouter = express.Router();
RentCarRouter.post("/searchcar/", RentCarController.searchRentCar);

export = RentCarRouter;
