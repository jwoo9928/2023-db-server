import { Model, DataTypes, Sequelize } from "sequelize";

interface CustomerAttributes {
  cno: string;
  name: string;
  passwd: string;
  email: string;
}

class Customer extends Model<CustomerAttributes> {
  public cno!: string;
  public name!: string;
  public passwd!: string;
  public email!: string;

  static initialize(sequelize: Sequelize) {
    this.init(
      {
        cno: { type: DataTypes.STRING, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        passwd: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
      },
      {
        sequelize,
        modelName: "Customer",
        tableName: "Customer",
        timestamps: false,
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db: any) {}
}

export default Customer;
