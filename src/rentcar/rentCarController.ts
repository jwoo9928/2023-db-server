import { NextFunction, Response, Request } from "express";
import CarModel from "../../models/CarModel";
import RentCar from "../../models/RentCar";
import { Op } from "sequelize";

const searchRentCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    CarModel;
    const { types } = req.body;
    console.log("req.doby: ", req.body);
    const carModels = await CarModel.findAll({
      where: {
        [Op.or]: types.map((type: string) => {
          return { vehicleType: type };
        }),
      },
    });
    const rentCars = await Promise.all(
      carModels.map(async (model: CarModel) => {
        return await RentCar.findAll({
          where: { modelName: model.modelName },
        });
      })
    );
    console.log("carModels", carModels);
    res.status(200).json({
      customerInfo: rentCars,
    });
  } catch (e) {
    res.status(404).json({
      result: `404 Not Found. ${e} `,
    });
  }
};

const RentCarController = {
  searchRentCar,
};

export default RentCarController;
