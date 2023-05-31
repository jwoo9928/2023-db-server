import { Model, DataTypes, Sequelize } from "sequelize";

interface RserveAttributes {
  licensePlateNo: string;
  startDate: Date;
  reserveDate: Date;
  endDate: Date;
  cno: string;
}

class Reserve extends Model<RserveAttributes> {
  public licensePlateNo!: string;
  public startDate!: Date;
  public reserveDate!: Date;
  public endDate!: Date;
  public cno!: string;
  public optionName!: string;

  static initialize(sequelize: Sequelize) {
    this.init(
      {
        licensePlateNo: { type: DataTypes.STRING, primaryKey: true },
        startDate: { type: DataTypes.DATE, allowNull: false, primaryKey: true },
        reserveDate: { type: DataTypes.DATE, allowNull: false },
        endDate: { type: DataTypes.DATE, allowNull: false },
        cno: { type: DataTypes.STRING, allowNull: false },
      },
      {
        sequelize,
        modelName: "Reserve",
        tableName: "Reserve",
        timestamps: false,
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db: any) {}
}

export default Reserve;
