import { Model, DataTypes, Sequelize } from "sequelize";

interface PreviousRentalAttributes {
  licensePlateNo: string;
  dateRented: Date;
  dateReturned: Date;
  payment: number;
  cno: string;
}

class PreviousRental extends Model<PreviousRentalAttributes> {
  public licensePlateNo!: string;
  public dateRented!: Date;
  public dateReturned!: Date;
  public payment!: number;
  public cno!: string;

  static initialize(sequelize: Sequelize) {
    this.init(
      {
        licensePlateNo: { type: DataTypes.STRING, primaryKey: true },
        dateRented: {
          type: DataTypes.DATE,
          allowNull: false,
          primaryKey: true,
        },
        dateReturned: { type: DataTypes.DATE, allowNull: false },
        payment: { type: DataTypes.INTEGER, allowNull: false },
        cno: { type: DataTypes.STRING, allowNull: false },
      },
      {
        sequelize,
        modelName: "PreviousRental",
        tableName: "PreviousRental",
        timestamps: false,
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db: any) {}
}

export default PreviousRental;
