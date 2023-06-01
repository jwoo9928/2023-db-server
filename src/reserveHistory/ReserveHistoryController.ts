import { NextFunction, Response, Request } from "express";
import PreviousRental from "../../models/PreviousRental";

const getPreviousRentalInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cno } = req.body;
    const userPreviousRentalInfo = await PreviousRental.findAll({
      where: { cno: cno },
    });
    res.status(200).json({
      result: userPreviousRentalInfo,
    });
  } catch (e) {
    res.status(404).json({
      result: `404 Not Found.${e}`,
    });
  }
};

const getReserveInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cno } = req.body;
    const userReserveInfo = await PreviousRental.findAll({
      where: { cno: cno },
    });
    res.status(200).json({
      result: userReserveInfo,
    });
  } catch (e) {
    res.status(404).json({
      result: `404 Not Found.${e}`,
    });
  }
};

const ReserveHistoryController = {
  getPreviousRentalInfo,
  getReserveInfo,
};

export default ReserveHistoryController;
