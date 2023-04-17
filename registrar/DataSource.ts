import { DataSource, DataSourceOptions } from "typeorm";
import { Student } from "./entity/Student";

//initialize the database connection
export const AppDataSource = new DataSource({
  type: "sqlite",
  host: "localhost",
  port: 3306,
  username: "test",
  password: "test",
  database: "registrardb",
  synchronize: true,
  logging: false,
  entities: [Student],
} as DataSourceOptions);

AppDataSource.initialize();
