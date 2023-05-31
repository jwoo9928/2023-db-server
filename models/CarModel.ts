import { DataTypes, Model, Sequelize } from "sequelize";

interface CarModelAttributes {
  modelName: string;
  vehicleType: string;
  rentRatePerDay: number;
  fuel: string;
  numberOfSeats: number;
}

class CarModel extends Model<CarModelAttributes> {
  public modelName!: string;
  public vehicleType!: string;
  public rentRatePerDay!: number;
  public fuel!: string;
  public numberOfSeats!: number;

  static initialize(sequelize: Sequelize) {
    this.init(
      {
        modelName: { type: DataTypes.STRING, primaryKey: true },
        vehicleType: { type: DataTypes.STRING, allowNull: false },
        rentRatePerDay: { type: DataTypes.INTEGER, allowNull: false },
        fuel: { type: DataTypes.STRING, allowNull: false },
        numberOfSeats: { type: DataTypes.INTEGER, allowNull: false },
      },
      {
        sequelize,
        modelName: "CarModel",
        tableName: "CarModel",
        timestamps: false,
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

export default CarModel;
