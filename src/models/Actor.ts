import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

export class Actor extends Model {
  public id!: number;
  public name!: string;
}

Actor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Actors",
  },
);

export default Actor;
