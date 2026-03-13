import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { Genre } from "./Genre";

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
    genreId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Genres",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "Movies",
  },
);

Genre.hasMany(Movie, {
  foreignKey: "genreId",
  as: "movies",
});
Movie.belongsTo(Genre, {
  foreignKey: "genreId",
  as: "genre",
});

export default Movie;
