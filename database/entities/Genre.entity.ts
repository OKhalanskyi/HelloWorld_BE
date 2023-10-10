import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MovieEntity } from './Movie.entity';

@Entity({ name: 'genres' })
export class GenreEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, type: 'text' })
  name: string

  @ManyToMany(() => MovieEntity, movie => movie.genres)
  movies: MovieEntity[];
}