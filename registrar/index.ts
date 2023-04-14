import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import { Student } from "./entity/Student";
export { Student } from "./entity/Student";
import { StudentRepository } from "./StudentRepository";
export { StudentRepository } from "./StudentRepository";

var _connection: Connection;

//initialize the database connection
export async function connect(databaseFN: string) {
  _connection = await createConnection({
    type: "sqlite",
    database: databaseFN,
    synchronize: true,
    logging: false,
    entities: [Student],
  });
}

export function connected() {
  return typeof _connection !== "undefined";
}

export function getStudentRepository() {
  return _connection.getCustomRepository(StudentRepository);
}
