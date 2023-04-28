import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    index(): any {
        return process.env.DB_PASSWORD;
    }
    
}
