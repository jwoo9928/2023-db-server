import { Model, DataTypes, Sequelize } from "sequelize";

interface OptionsAttributes {
  licensePlateNo: string;
  optionName: string;
}

class Options extends Model<OptionsAttributes> {
  public licensePlateNo!: string;
  public optionName!: string;

  static initialize(sequelize: Sequelize) {
    this.init(
      {
        licensePlateNo: { type: DataTypes.STRING, primaryKey: true },
        optionName: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true,
        },
      },
      {
        sequelize,
        modelName: "Options",
        tableName: "Options",
        timestamps: false,
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db: any) {}
}

export default Options;
