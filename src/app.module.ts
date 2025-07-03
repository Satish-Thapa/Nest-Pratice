import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats/cats.module';
import { BilliModule } from './modules/billi/billi.module';
import {
  LOGGER,
  LOGGER_PROVIDER,
} from './modules/custom-providers/logger.provider';

@Module({
  imports: [CatsModule, BilliModule],
  controllers: [AppController],
  providers: [AppService, LOGGER, LOGGER_PROVIDER],
  exports: [LOGGER, LOGGER_PROVIDER],
})
export class AppModule {}
