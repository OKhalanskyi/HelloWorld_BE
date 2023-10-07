import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PersonEntity } from './Person.entity';
import { MovieEntity } from './Movie.entity';

@Entity({ name: 'movieInfos' })
export class MovieInfoEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, type: 'text' })
  description: string

  @ManyToMany(() => PersonEntity, person => person.movieInfos)
  @JoinTable()
  actors: PersonEntity[];

  @OneToOne(() => MovieEntity, movie => movie.id)
  @JoinColumn()
  movie: MovieEntity;

  @OneToOne(() => PersonEntity, person => person.id)
  @JoinColumn()
  director: PersonEntity;
}