import { Injectable, NotFoundException, Inject, Scope } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { SharedLoggerService } from 'src/common/services/shared.service';
import { IndependentService } from '../independent/independent.service';

@Injectable({ scope: Scope.DEFAULT }) //Reuest ki transnet rakheko bhaye cats empty aaucha
export class CatsService {
  private cats = [];
  constructor(
    @Inject('LOGGER') private readonly logger: Console,
    // private loggers: Logger,
    //  private readonly sharedLogger: SharedLoggerService
    private readonly independentService: IndependentService, //Dependency injection
  ) {}
  create(dto: CreateCatDto) {
    const newCat = { id: Date.now(), ...dto };
    this.cats.push(newCat);
    return newCat;
  }

  findAll() {
    this.logger.log('Fetching all cats');
    this.independentService.getMessage(); //Using independent service
    // this.sharedLogger.log('CatsService: findAll called');
    return this.cats;
  }

  findOne(id: number) {
    const cat = this.cats.find((c) => c.id === id);
    if (!cat) {
      throw new NotFoundException(`Cat #${id} not found`);
    }
    return cat;
  }
}
