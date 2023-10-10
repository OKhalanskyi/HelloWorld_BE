import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MovieInfoEntity } from './MovieInfo.entity';

@Entity({ name: 'people' })
export class PersonEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, type: 'text', unique: true })
  name: string

  @ManyToMany(() => MovieInfoEntity, movie => movie.actors)
  movieInfos: MovieInfoEntity[];

  @OneToMany(() => MovieInfoEntity, movieInfo => movieInfo.director)
  movieInfo: MovieInfoEntity[];
}