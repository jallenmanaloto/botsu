import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'containers-us-west-35.railway.app',
    port: 6129,
    username: 'postgres',
    password: 'KfunpUF7Kyw0reWmsFDn',
    database: 'railway',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/src/migration/*.js']
}

const dataSource = new DataSource(dataSourceOptions)

export default dataSource