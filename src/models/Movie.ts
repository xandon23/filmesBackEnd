import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

export class Movie extends Model {
  public id!: number;
  public title!: string;
}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Movies",
  },
);

export default Movie;
