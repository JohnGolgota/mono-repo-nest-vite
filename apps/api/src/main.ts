import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('/api/v1'); // <--- Add this line
    await app.listen(3000);
}
bootstrap();
