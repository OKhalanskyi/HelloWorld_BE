import { Column, Entity, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MovieInfoEntity } from './MovieInfo.entity';

@Entity({ name: 'people' })
export class PersonEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, type: 'text' })
  name: string

  @ManyToMany(() => MovieInfoEntity, movie => movie.actors)
  movieInfos: MovieInfoEntity[];

  @OneToOne(() => MovieInfoEntity, movieInfo => movieInfo.director)
  movieInfo: MovieInfoEntity;
}