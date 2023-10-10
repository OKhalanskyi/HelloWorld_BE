import { Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GenreEntity } from './Genre.entity';
import { MovieInfoEntity } from './MovieInfo.entity';

@Entity({ name: 'movies' })
export class MovieEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, type: 'text' })
  title: string

  @Column({ nullable: false, type: 'text' })
  image: string

  @Column({ nullable: false, type: 'float' })
  rating: number

  @Column({ nullable: false, type: 'int' })
  year: number

  @Column({ nullable: false, type: 'int' })
  duration: number

  @ManyToMany(() => GenreEntity, genre => genre.movies)
  @JoinTable()
  genres: GenreEntity[];

  @OneToOne(() => MovieInfoEntity, movieInfo => movieInfo.movie)
  movieInfo: MovieInfoEntity;
}