import express, { Request, Response, NextFunction } from "express";
import ReserveHistoryController from "./ReserveHistoryController";

const ReserveHistoryRouter = express.Router();
ReserveHistoryRouter.get(
  "/reserve/list",
  ReserveHistoryController.getReserveInfo
);
ReserveHistoryRouter.get(
  "/privious/list",
  ReserveHistoryController.getPreviousRentalInfo
);

export = ReserveHistoryRouter;
