import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBot1682672098134 implements MigrationInterface {
    name = 'CreateBot1682672098134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bot" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "styleName" character varying NOT NULL, "description" character varying NOT NULL, "quirk" character varying NOT NULL, CONSTRAINT "PK_bc6d59d7870eb2efd5f7f61e5ca" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "bot"`);
    }

}
