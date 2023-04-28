import { Repository, EntityRepository } from "typeorm";
import { Injectable } from '@nestjs/common';
import { Bot } from "src/entities/bot.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateBotDto } from "./dto/create-bot.dto";

@Injectable()
export class BotRepository {
    constructor(
        @InjectRepository(Bot)
        private botRepository: Repository<Bot>
    ) {}

    createNew(bot: CreateBotDto): Promise<Bot> {
        const newBot = this.botRepository.create(bot)

        return this.botRepository.save(newBot)
    }

    async getAll(userId: string): Promise<Bot[]> {
        return this.botRepository
            .find({
                where: {
                    user: {
                        id: userId
                    }
                }
            })
    }
}
