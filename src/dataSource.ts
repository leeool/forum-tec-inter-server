import { DataSource } from "typeorm"
import "dotenv/config"
import "reflect-metadata"

const appDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [__dirname + "/**/entities/*.{js,ts}"],
  migrations: [__dirname + "/**/migrations/*.{js,ts}"]
})

export default appDataSource
