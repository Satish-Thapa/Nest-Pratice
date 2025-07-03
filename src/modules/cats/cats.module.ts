import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { LOGGER } from '../custom-providers/logger.provider';

@Module({
  imports: [],
  providers: [CatsService, LOGGER],
  controllers: [CatsController],
  exports: [CatsService],
})
export class CatsModule {}
