import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationships1682672873695 implements MigrationInterface {
    name = 'CreateRelationships1682672873695'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bot" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "bot" ADD CONSTRAINT "FK_21a08745ccbe41631b8fc8d8e7e" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bot" DROP CONSTRAINT "FK_21a08745ccbe41631b8fc8d8e7e"`);
        await queryRunner.query(`ALTER TABLE "bot" DROP COLUMN "userId"`);
    }

}
