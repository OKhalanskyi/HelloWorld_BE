import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionDatabase } from '../database/typeorm-config';
import { MovieModule } from './modules/movie/movie.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      ...connectionDatabase,
      autoLoadEntities: true
    }),
    MovieModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
