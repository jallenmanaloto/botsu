import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BotModule } from './bot/bot.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './config/ormconfig'
import { QuirkModule } from './quirk/quirk.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    BotModule,
    QuirkModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
