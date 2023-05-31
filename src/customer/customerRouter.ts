import express, { Request, Response, NextFunction } from "express";
import UserController from "./customerController";

const CustomerRouter = express.Router();

//UserRouter.get("/:id",UserController.getUserName);
//UserRouter.get("/test",UserController.authUser);
CustomerRouter.get("/list/", UserController.getUserList);
CustomerRouter.post("/login", UserController.login);

export = CustomerRouter;
