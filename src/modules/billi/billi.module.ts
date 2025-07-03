import { Module } from '@nestjs/common';
import { BilliService } from './billi.service';
import { BilliController } from './billi.controller';
import { CatsService } from '../cats/cats.service';
import { CustomModule } from '../custom-providers/custom.module';
import { LOGGER } from '../custom-providers/logger.provider';
import { SharedLoggerService } from 'src/common/services/shared.service';
import { CatsModule } from '../cats/cats.module';

@Module({
  imports: [CustomModule],
  providers: [BilliService, LOGGER, SharedLoggerService],
  controllers: [BilliController],
  exports: [BilliService],
})
export class BilliModule {}
