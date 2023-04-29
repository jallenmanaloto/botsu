import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateQuirkNameNullable1682772433648 implements MigrationInterface {
    name = 'CreateQuirkNameNullable1682772433648'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bot" ADD "quirkName" character varying`);
        await queryRunner.query(`ALTER TABLE "bot" DROP CONSTRAINT "FK_21a08745ccbe41631b8fc8d8e7e"`);
        await queryRunner.query(`ALTER TABLE "bot" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bot" ADD CONSTRAINT "FK_21a08745ccbe41631b8fc8d8e7e" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bot" DROP CONSTRAINT "FK_21a08745ccbe41631b8fc8d8e7e"`);
        await queryRunner.query(`ALTER TABLE "bot" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bot" ADD CONSTRAINT "FK_21a08745ccbe41631b8fc8d8e7e" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bot" DROP COLUMN "quirkName"`);
    }

}
