import { DataSourceOptions, DataSource } from "typeorm";
import * as dotenv from 'dotenv'

dotenv.config()

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/src/entities/*.entity.{js,ts}'],
  migrations: ['dist/src/migration/*.{js,ts}']
}

const dataSource = new DataSource(dataSourceOptions)

export default dataSource