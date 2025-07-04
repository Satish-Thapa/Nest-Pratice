import { DynamicModule, Global, Module } from '@nestjs/common';
import { DynamicService } from './dynamic.service';

export interface DynamicModuleOptions {
  value: string;
}

@Module({})
export class DynamicGlobalModule {
  static forRoot(options: DynamicModuleOptions): DynamicModule {
    return {
      module: DynamicGlobalModule,
      providers: [
        {
          provide: 'DYNAMIC_OPTIONS',
          useValue: options,
        },
        {
          provide: DynamicService,
          useFactory: (opts: DynamicModuleOptions) => new DynamicService(opts),
          inject: ['DYNAMIC_OPTIONS'],
        },
      ],
      exports: [DynamicService],
    };
  }

  static forRootAsync(asyncOptions: {
    useFactory: (
      ...args: any[]
    ) => Promise<DynamicModuleOptions> | DynamicModuleOptions;
    inject?: any[];
  }): DynamicModule {
    return {
      module: DynamicGlobalModule,
      providers: [
        {
          provide: 'DYNAMIC_OPTIONS',
          useFactory: asyncOptions.useFactory,
          inject: asyncOptions.inject || [],
        },
        {
          provide: DynamicService,
          useFactory: (opts: DynamicModuleOptions) => new DynamicService(opts),
          inject: ['DYNAMIC_OPTIONS'],
        },
      ],
      exports: [DynamicService],
    };
  }
}
