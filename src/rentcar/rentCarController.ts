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
    const { types, startDate, endDate } = req.body;

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
          where: {
            modelName: model.modelName,
            [Op.or]: [
              {
                [Op.or]: [
                  {
                    dateRented: {
                      [Op.lt]: startDate,
                    },
                    dateDue: {
                      [Op.lt]: startDate,
                    },
                  },
                  {
                    dateRented: {
                      [Op.gt]: endDate,
                    },
                    dateDue: {
                      [Op.gt]: endDate,
                    },
                  },
                ],
              },
            ],
          },
        });
      })
    );
    res.status(200).json({
      rentCars: rentCars,
    });
  } catch (e) {
    res.status(404).json({
      result: `404 Not Found. ${e} `,
    });
  }
};

const rentRentCar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { licensePlateNo } = req.body;
    await RentCar.update(
      {
        dateRented: null as any,
        dateDue: null as any,
        cno: null as any,
      },
      { where: { licensePlateNo } }
    );
  } catch (e) {
    res.status(404).json({
      result: `404 Not Found. ${e} `,
    });
  }
};

const returnRentCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { licensePlateNo } = req.body;
  await RentCar.update(
    { dateRented: null as any, dateDue: null as any, cno: null as any },
    { where: { licensePlateNo } }
  );
};

const RentCarController = {
  searchRentCar,
  rentRentCar,
  returnRentCar,
};

export default RentCarController;
