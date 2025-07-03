import { Injectable } from '@nestjs/common';
import { CatsService } from '../cats/cats.service';
@Injectable()
export class BilliService {
  constructor(private catsService: CatsService) {}
  private cats = ['test'];

  findAll() {
    return this.cats;
  }

  getTest() {
    return this.catsService.findAll();
  }
}
