import { MigrationInterface, QueryRunner } from "typeorm"

export class Migration1696720870973 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "people" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_aa866e71353ee94c6cc51059c5b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "movieInfos" ("id" SERIAL NOT NULL, "description" text NOT NULL, "movieId" integer, "directorId" integer, CONSTRAINT "REL_af359e4c4f426df313f5ff5920" UNIQUE ("movieId"), CONSTRAINT "REL_238bab1d8c7c7ca97d6ca974eb" UNIQUE ("directorId"), CONSTRAINT "PK_81a173b49626be9efb6d18cec55" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "movies" ("id" SERIAL NOT NULL, "title" text NOT NULL, "image" text NOT NULL, "rating" double precision NOT NULL, "year" integer NOT NULL, "duration" integer NOT NULL, CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "genres" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_80ecd718f0f00dde5d77a9be842" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "movie_infos_actors_people" ("movieInfosId" integer NOT NULL, "peopleId" integer NOT NULL, CONSTRAINT "PK_217f68d93e75d50c11e1ccccd86" PRIMARY KEY ("movieInfosId", "peopleId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_fdfd7b2d649f12cc57c86dd65a" ON "movie_infos_actors_people" ("movieInfosId") `);
        await queryRunner.query(`CREATE INDEX "IDX_fb5647e87d383b0d811440938f" ON "movie_infos_actors_people" ("peopleId") `);
        await queryRunner.query(`CREATE TABLE "movies_genres_genres" ("moviesId" integer NOT NULL, "genresId" integer NOT NULL, CONSTRAINT "PK_59537f354fd4a79606cc4f3cf1b" PRIMARY KEY ("moviesId", "genresId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_cb43556a8849221b82cd17461c" ON "movies_genres_genres" ("moviesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ccf6c10277da37e9fc265863fa" ON "movies_genres_genres" ("genresId") `);
        await queryRunner.query(`ALTER TABLE "movieInfos" ADD CONSTRAINT "FK_af359e4c4f426df313f5ff5920c" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movieInfos" ADD CONSTRAINT "FK_238bab1d8c7c7ca97d6ca974eb5" FOREIGN KEY ("directorId") REFERENCES "people"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movie_infos_actors_people" ADD CONSTRAINT "FK_fdfd7b2d649f12cc57c86dd65aa" FOREIGN KEY ("movieInfosId") REFERENCES "movieInfos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "movie_infos_actors_people" ADD CONSTRAINT "FK_fb5647e87d383b0d811440938fc" FOREIGN KEY ("peopleId") REFERENCES "people"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movies_genres_genres" ADD CONSTRAINT "FK_cb43556a8849221b82cd17461c8" FOREIGN KEY ("moviesId") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "movies_genres_genres" ADD CONSTRAINT "FK_ccf6c10277da37e9fc265863fab" FOREIGN KEY ("genresId") REFERENCES "genres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies_genres_genres" DROP CONSTRAINT "FK_ccf6c10277da37e9fc265863fab"`);
        await queryRunner.query(`ALTER TABLE "movies_genres_genres" DROP CONSTRAINT "FK_cb43556a8849221b82cd17461c8"`);
        await queryRunner.query(`ALTER TABLE "movie_infos_actors_people" DROP CONSTRAINT "FK_fb5647e87d383b0d811440938fc"`);
        await queryRunner.query(`ALTER TABLE "movie_infos_actors_people" DROP CONSTRAINT "FK_fdfd7b2d649f12cc57c86dd65aa"`);
        await queryRunner.query(`ALTER TABLE "movieInfos" DROP CONSTRAINT "FK_238bab1d8c7c7ca97d6ca974eb5"`);
        await queryRunner.query(`ALTER TABLE "movieInfos" DROP CONSTRAINT "FK_af359e4c4f426df313f5ff5920c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ccf6c10277da37e9fc265863fa"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cb43556a8849221b82cd17461c"`);
        await queryRunner.query(`DROP TABLE "movies_genres_genres"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fb5647e87d383b0d811440938f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fdfd7b2d649f12cc57c86dd65a"`);
        await queryRunner.query(`DROP TABLE "movie_infos_actors_people"`);
        await queryRunner.query(`DROP TABLE "genres"`);
        await queryRunner.query(`DROP TABLE "movies"`);
        await queryRunner.query(`DROP TABLE "movieInfos"`);
        await queryRunner.query(`DROP TABLE "people"`);
    }

}
