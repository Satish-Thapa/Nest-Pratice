import { Module } from '@nestjs/common';
import { SharedLoggerService } from './shared.service';

@Module({
  imports: [],
  providers: [SharedLoggerService],
  exports: [SharedLoggerService],
})
export class SharedLoggerModule {}
