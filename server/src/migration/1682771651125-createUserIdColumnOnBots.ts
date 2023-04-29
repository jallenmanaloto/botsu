import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserIdColumnOnBots1682771651125 implements MigrationInterface {
    name = 'CreateUserIdColumnOnBots1682771651125'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bot" DROP CONSTRAINT "FK_21a08745ccbe41631b8fc8d8e7e"`);
        await queryRunner.query(`ALTER TABLE "bot" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bot" ADD CONSTRAINT "FK_21a08745ccbe41631b8fc8d8e7e" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bot" DROP CONSTRAINT "FK_21a08745ccbe41631b8fc8d8e7e"`);
        await queryRunner.query(`ALTER TABLE "bot" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bot" ADD CONSTRAINT "FK_21a08745ccbe41631b8fc8d8e7e" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
