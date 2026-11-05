import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");
  app.enableShutdownHooks();

  const config = app.get(ConfigService);
  const host = config.getOrThrow<string>("API_HOST");
  const port = config.getOrThrow<number>("API_PORT");
  await app.listen(port, host);
}

void bootstrap();
