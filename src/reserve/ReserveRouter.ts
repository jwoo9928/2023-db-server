import express, { Request, Response, NextFunction } from "express";
import RserveController from "./ReserveController";

const ReserveRouter = express.Router();

ReserveRouter.post("/reserve", RserveController.carReservation);
ReserveRouter.post("/cancel", RserveController.carCancelReservation);

export default ReserveRouter;
