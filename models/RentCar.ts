import { DataTypes, Model, Sequelize } from "sequelize";

interface RentCarAttributes {
  licensePlateNo: string;
  modelName: string;
  dateRented: Date;
  dateDue: Date;
  cno: string;
}

class RentCar extends Model<RentCarAttributes> {
  public licensePlateNo!: string;
  public modelName!: string;
  public dateRented!: Date;
  public dateDue!: Date;
  public cno!: string;

  static initialize(sequelize: Sequelize) {
    this.init(
      {
        licensePlateNo: { type: DataTypes.STRING, primaryKey: true },
        modelName: { type: DataTypes.STRING, allowNull: false },
        dateRented: { type: DataTypes.DATE },
        dateDue: { type: DataTypes.DATE },
        cno: { type: DataTypes.STRING },
      },
      {
        sequelize,
        modelName: "RentCar",
        tableName: "RentCar",
        timestamps: false,
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

export default RentCar;
