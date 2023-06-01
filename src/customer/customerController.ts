import { NextFunction, Response, Request } from "express";
import Customer from "../../models/Customer";

const getUserList = async (req: Request, res: Response, next: NextFunction) => {
  console.log("activate get user Name");
  const customerList = await Customer.findAll();
  res.status(200).json({
    customerInfo: customerList,
  });
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { cno, pwd } = req.body;
    const isAvailable = await Customer.findOne({
      where: { cno: cno, passwd: pwd },
    });
    if (!isAvailable) {
      throw Error("login failed");
    }
    return res.status(200).json({
      customerInfo: isAvailable,
    });
  } catch (e) {
    res.status(404).json({
      result: "404 error",
    });
  }
};

const CustomerController = {
  getUserList,
  login,
};

export default CustomerController;
