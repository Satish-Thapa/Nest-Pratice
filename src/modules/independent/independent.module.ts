import { Module } from '@nestjs/common';
import { IndependentService } from './independent.service';
import { SharedLoggerModule } from 'src/common/services/shared.module';

@Module({
    imports: [SharedLoggerModule],
  providers: [IndependentService],
  exports: [IndependentService],
})
export class IndependentModule {} //kai use bha chaina