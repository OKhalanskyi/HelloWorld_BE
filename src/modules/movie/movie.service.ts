import { MovieEntity } from '../../../database/entities/Movie.entity';
import { Like, Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Errors } from '../utils/constants/Errors';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity) private readonly movieRepository: Repository<MovieEntity>,
  ) {}

  async getMoviesByQuery (searchQuery: string, page: number){
    try {
      const PAGE_MOVIES_COUNT = 24;

      const [movies, totalMovies] = await this.movieRepository.findAndCount({
        take: PAGE_MOVIES_COUNT,
        skip: (page - 1) * PAGE_MOVIES_COUNT,
        order: {
          id: 'ASC'
        },
        relations: ['genres'],
        where: {
          title: Like(`%${searchQuery}%`)
        }
      })

      const totalPages = Math.ceil(totalMovies / PAGE_MOVIES_COUNT)

      return { movies, totalMovies, totalPages }
    } catch (e) {
      throw new HttpException(Errors.BAD_REQUEST, HttpStatus.BAD_REQUEST);
    }
  }

  async getMovieById (movieId: string) {
    try {
      const movie = await this.movieRepository
        .createQueryBuilder('movie')
        .leftJoinAndSelect('movie.movieInfo', 'movieInfos')
        .leftJoinAndSelect('movieInfos.actors', 'people')
        .leftJoin('movieInfos.director', 'director')
        .addSelect('director')
        .where('movie.id = :id', { id: movieId })
        .getOne();

      return movie
    } catch (e) {
      throw new HttpException(Errors.BAD_REQUEST, HttpStatus.BAD_REQUEST);
    }
  }
}