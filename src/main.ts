import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors();

  await app.listen(process.env.PORT, () => {
    console.log(`started on ${process.env.PORT}`)
  });
}
bootstrap();
