import { DataSourceOptions, DataSource } from "typeorm";
import * as dotenv from 'dotenv'
import { Bot } from './src/entities/bot.entity'
import { User } from './src/entities/user.entity'
import { Quirk } from './src/entities/quirk.entity'

dotenv.config()

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Bot, User, Quirk],
  migrations: ['dist/src/migration/*.{js,ts}']
}

const dataSource = new DataSource(dataSourceOptions)

export default dataSource