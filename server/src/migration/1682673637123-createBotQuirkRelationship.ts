import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBotQuirkRelationship1682673637123 implements MigrationInterface {
    name = 'CreateBotQuirkRelationship1682673637123'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bot" RENAME COLUMN "quirk" TO "quirkId"`);
        await queryRunner.query(`CREATE TABLE "quirk" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_01166df63b418633c78421d4cbf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "bot" DROP COLUMN "quirkId"`);
        await queryRunner.query(`ALTER TABLE "bot" ADD "quirkId" uuid`);
        await queryRunner.query(`ALTER TABLE "bot" ADD CONSTRAINT "UQ_877e9299d8960089c495afb2c25" UNIQUE ("quirkId")`);
        await queryRunner.query(`ALTER TABLE "bot" ADD CONSTRAINT "FK_877e9299d8960089c495afb2c25" FOREIGN KEY ("quirkId") REFERENCES "quirk"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bot" DROP CONSTRAINT "FK_877e9299d8960089c495afb2c25"`);
        await queryRunner.query(`ALTER TABLE "bot" DROP CONSTRAINT "UQ_877e9299d8960089c495afb2c25"`);
        await queryRunner.query(`ALTER TABLE "bot" DROP COLUMN "quirkId"`);
        await queryRunner.query(`ALTER TABLE "bot" ADD "quirkId" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "quirk"`);
        await queryRunner.query(`ALTER TABLE "bot" RENAME COLUMN "quirkId" TO "quirk"`);
    }

}
