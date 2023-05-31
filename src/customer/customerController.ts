import { NextFunction, Response, Request } from "express";
import Customer from "../../models/Customer";

const getUserList = async (req: Request, res: Response, next: NextFunction) => {
  console.log("activate get user Name");
  const customerList = await Customer.findAll();
  res.status(200).json({
    customerInfo: customerList,
  });
};

const CustomerController = {
  getUserList,
};

export default CustomerController;
