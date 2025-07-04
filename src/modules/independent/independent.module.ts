import { Module } from '@nestjs/common';
import { IndependentService } from './independent.service';
import { SharedLoggerModule } from 'src/common/services/shared.module';
import { DynamicGlobalModule } from '../../dynamic-modules/dynamic/dynamic.module';

@Module({
  imports: [
    SharedLoggerModule,
    DynamicGlobalModule.forRoot({ value: 'sync value' }),
    DynamicGlobalModule.forRootAsync({
      useFactory: async () => {
        // Simulate async config
        return { value: 'async value' };
      },
    }),
  ],
  providers: [IndependentService],
  exports: [IndependentService],
})
export class IndependentModule {} //kai use bha chaina
