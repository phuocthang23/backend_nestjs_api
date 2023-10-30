import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const port = process.env.PORT || 4000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => console.log(`listening on port ${port}`));
}
bootstrap();
