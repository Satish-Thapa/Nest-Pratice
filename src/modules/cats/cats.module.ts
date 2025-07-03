import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { LOGGER } from '../custom-providers/logger.provider';
import { SharedLoggerService } from 'src/common/services/shared.service';
import { BilliService } from '../billi/billi.service';
import { SharedLoggerModule } from 'src/common/services/shared.module';
import { IndependentService } from '../independent/independent.service';

@Module({
  imports: [],
  // providers: [CatsService, LOGGER, SharedLoggerService, BilliService,{provide: 'CUSTOM_VALUE', useValue: "Will work"}],
  providers: [CatsService, LOGGER,IndependentService],//eema sared use garna mildina as shared is dependent

  controllers: [CatsController],
  exports: [CatsService],
})
export class CatsModule {}
