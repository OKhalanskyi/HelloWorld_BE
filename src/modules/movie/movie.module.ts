import { MovieEntity } from '../../../database/entities/Movie.entity';
import { PersonEntity } from '../../../database/entities/Person.entity';
import { GenreEntity } from '../../../database/entities/Genre.entity';
import { MovieInfoEntity } from '../../../database/entities/MovieInfo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Services } from '../utils/constants/Services';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([MovieEntity, PersonEntity, GenreEntity, MovieInfoEntity]),
  ],
  exports: [{ provide: Services.Movie, useClass: MovieService }],
  controllers: [MovieController],
  providers: [{ provide: Services.Movie, useClass: MovieService }],
})
export class MovieModule {}