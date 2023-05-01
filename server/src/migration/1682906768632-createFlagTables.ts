import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFlagTables1682906768632 implements MigrationInterface {
    name = 'CreateFlagTables1682906768632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quirk" ADD "flag" character varying`);
        await queryRunner.query(`ALTER TABLE "bot" ADD "quirkFlag" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bot" DROP COLUMN "quirkFlag"`);
        await queryRunner.query(`ALTER TABLE "quirk" DROP COLUMN "flag"`);
    }

}
