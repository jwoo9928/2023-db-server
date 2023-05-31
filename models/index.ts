import { Sequelize } from "sequelize";
import CarModel from "./CarModel";
import Customer from "./Customer";
import RentCar from "./RentCar";
import Options from "./Options";
import Reserve from "./Reserve";
import PreviousRental from "./PreviousRental";

const sequelize = new Sequelize(
  "mysql://root:1234@localhost:3306/Chungbat_RenterCar"
);

const db: { [key: string]: any } = {};

db.sequelize = sequelize;

db.Customer = Customer;
db.CarModel = CarModel;
db.RentCar = RentCar;
db.Options = Options;
db.Reserve = Reserve;
db.PreviousRental = PreviousRental;

db.CarModel.initialize(sequelize);
db.Customer.initialize(sequelize);
db.RentCar.initialize(sequelize);
db.Options.initialize(sequelize);
db.Reserve.initialize(sequelize);
db.PreviousRental.initialize(sequelize);

db.RentCar.belongsTo(CarModel, { foreignKey: "modelName" });
db.RentCar.belongsTo(Customer, { foreignKey: "cno" });
db.Options.belongsTo(RentCar, { foreignKey: "licensePlateNo" });
db.Reserve.belongsTo(RentCar, { foreignKey: "licensePlateNo" });
db.Reserve.belongsTo(Customer, { foreignKey: "cno" });
db.PreviousRental.belongsTo(RentCar, { foreignKey: "licensePlateNo" });
db.PreviousRental.belongsTo(Customer, { foreignKey: "cno" });

export default db;
