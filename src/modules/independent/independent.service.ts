import { Injectable, Inject, Optional } from '@nestjs/common';
import { SharedLoggerService } from 'src/common/services/shared.service';
import { DynamicService } from '../../dynamic-modules/dynamic/dynamic.service';

@Injectable()
export class IndependentService {
  constructor(@Optional() private readonly dynamicService?: DynamicService) {}

  getMessage(): string {
    // this.sharedLogger.log('IndependentService: getMessage called');
    const dynamicValue = this.dynamicService?.getOptions()?.value;
    return `Hello from IndependentService! Dynamic value: ${dynamicValue}`;
  }
}
