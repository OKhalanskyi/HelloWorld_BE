import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { Services } from '../utils/constants/Services';
import { MovieService } from './movie.service';
import { Routes } from '../utils/constants/Routes';

@Controller()
export class MovieController {
  constructor(@Inject(Services.Movie) private movieService: MovieService) {}

  @Get(Routes.MovieList)
  getMovieList(
    @Query('query') query: string,
    @Query('page') page: number
  ) {
    return this.movieService.getMoviesByQuery(query, page);
  }

  @Get(Routes.MovieById)
  getMovieById(@Param('id') id: string) {
    return this.movieService.getMovieById(id);
  }
}