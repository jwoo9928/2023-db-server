import { NextFunction, Response, Request } from "express";
import Reserve from "../../models/Reserve";
import RentCar from "../../models/RentCar";
//Reserve -> 예약 테이블
//RentCar -> 대여
//PreviousRnet -> 반납, 대여기간 지나고 자동 반납.
const carReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { licensePlateNo, reserveDate, endDate, startDate, cno } = req.body;
    const isAvailable = await RentCar.findOne({ where: licensePlateNo });
    if (!isAvailable) {
      throw Error("Wrong plate number.");
    }
    await Reserve.create({
      licensePlateNo,
      startDate,
      reserveDate,
      endDate,
      cno,
    });
    res.status(200).json({
      result: true,
    });
  } catch (e) {
    res.status(404).json({
      result: `404 Not Found.${e}`,
    });
  }
};

const carCancelReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { licensePlateNo, startDate } = req.body;
    await Reserve.destroy({ where: { licensePlateNo, startDate } });
    res.status(200).json({
      result: true,
    });
  } catch (e) {
    res.status(404).json({
      result: `404 Not Found.${e}`,
    });
  }
};

const RserveController = {
  carReservation,
  carCancelReservation,
};

export default RserveController;
