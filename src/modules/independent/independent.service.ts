import { Injectable } from '@nestjs/common';
import { SharedLoggerService } from 'src/common/services/shared.service';

@Injectable()
export class IndependentService {
    // constructor(private readonly sharedLogger: SharedLoggerService) {} //cats ley milaina tespachi

  getMessage(): string {
    // this.sharedLogger.log('IndependentService: getMessage called');
    return 'Hello from IndependentService!';
  }
}