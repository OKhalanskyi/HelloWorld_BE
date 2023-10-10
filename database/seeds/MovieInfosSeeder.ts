// import { Seeder, SeederFactoryManager } from 'typeorm-extension';
// import { DataSource } from 'typeorm';
// import { MovieEntity } from '../../dist/database/entities/Movie.entity';
// import { MovieInfoEntity } from '../../dist/database/entities/MovieInfo.entity';
// import { PersonEntity } from '../../dist/database/entities/Person.entity';
// import movieInfos from '../../mocks/movieInfos.json';
//
// export default class MovieInfosSeeder implements Seeder {
//   public async run(
//     dataSource: DataSource,
//     factoryManager: SeederFactoryManager
//   ): Promise<any> {
//     const movieRepository =  dataSource.getRepository(MovieEntity);
//     const personRepository =  dataSource.getRepository(PersonEntity);
//     const movieInfoRepository = dataSource.getRepository(MovieInfoEntity);
//
//     const mockedMovieInfos = movieInfos.movieInfos;
//
//     await Promise.all(
//       mockedMovieInfos.map(async movieInfo => {
//         const movie = await movieRepository.findOneBy({ title: movieInfo.movie })
//
//         const director = await personRepository.findOneBy({ name: movieInfo.director })
//
//         const actors = await Promise.all(movieInfo.actors.map(async actor => {
//           return await personRepository.findOneBy({ name: actor })
//         }))
//
//         const newMovieInfo = await movieInfoRepository.create(
//           {
//             description: movieInfo.description,
//             movie,
//             actors,
//             director
//           }
//         );
//
//         return await movieInfoRepository.save(newMovieInfo)
//       })
//     )
//   }
// }