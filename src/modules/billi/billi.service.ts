import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CatsService } from '../cats/cats.service';
import { SharedLoggerService } from 'src/common/services/shared.service';

@Injectable()
export class BilliService {
  constructor(
    // private catsService: CatsService,
    // @Inject('CUSTOM_LOGGER') private readonly customLogger: any,
    @Inject('CUSTOM_VALUE') private readonly customValue: any,
    // @Inject('CUSTOM_FACTORY') private readonly customFactory: any,
    // @Inject('ALIAS_LOGGER') private readonly aliasLogger: any,
    @Inject(forwardRef(() => SharedLoggerService))
   private readonly sharedLogger: SharedLoggerService
  ) {}

  private cats = ['test'];

  findAll() {
    this.sharedLogger.log('BilliService: findAll called');
    // this.customLogger.log('BilliService: findAll called');
    return this.cats;
  }

  getTest() {
    // this.aliasLogger.log('BilliService: getTest called');
    // return this.catsService.findAll();
  }

  getCustomValue() {
    return this.customValue;
  }

  getFactoryNow() {
    // return this.customFactory.now();
  }
}
