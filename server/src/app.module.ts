import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { BotModule } from './bot/bot.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'ormconfig';

@Module({
  imports: [UserModule, BotModule,  TypeOrmModule.forRoot(config)],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
