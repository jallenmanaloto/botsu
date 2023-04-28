import { User } from "src/entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm"

export const config: TypeOrmModule = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User],
    synchronize: true
}