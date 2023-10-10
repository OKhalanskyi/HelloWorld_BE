import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { GenreEntity } from '../../dist/database/entities/Genre.entity';
import genres from '../../mocks/genres.json';

export default class GenreSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const genreRepository =  dataSource.getRepository(GenreEntity);

    const mockedGenres = genres.genres as GenreEntity[];

    await Promise.all(
      mockedGenres.map(async genre => {
        const newGenre = await genreRepository.create({
          name: genre.name
        })

        return await genreRepository.save(newGenre)
      })
    )
  }
}