// import { Seeder, SeederFactoryManager } from 'typeorm-extension';
// import { DataSource } from 'typeorm';
// import { MovieEntity } from '../../dist/database/entities/Movie.entity';
// import { GenreEntity } from '../../dist/database/entities/Genre.entity';
// import movies from '../../mocks/movies.json';
//
// export default class MovieSeeder implements Seeder {
//   public async run(
//     dataSource: DataSource,
//     factoryManager: SeederFactoryManager
//   ): Promise<any> {
//     const movieRepository =  dataSource.getRepository(MovieEntity);
//     const genreRepository = dataSource.getRepository(GenreEntity)
//
//     const mockedMovies = movies.movies;
//
//     await Promise.all(
//       mockedMovies.map(async movie => {
//         const genres = await Promise.all(movie.genres.map(async genre => {
//           return await genreRepository.findOneBy({ name: genre })
//         }))
//
//         const newMovie = await movieRepository.create(
//           {
//             title: movie.title,
//             image: movie.image,
//             rating: movie.rating,
//             year: movie.year,
//             duration: movie.duration,
//             genres
//           }
//         );
//
//         return await movieRepository.save(newMovie)
//       })
//     )
//   }
// }