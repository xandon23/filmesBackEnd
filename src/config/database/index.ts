import { Sequelize } from "sequelize";

const sequelize = new Sequelize("filmes2026", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  logging: false,
});

export default sequelize;
