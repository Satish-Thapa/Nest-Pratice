import { Controller, Get } from '@nestjs/common';
import { BilliService } from './billi.service';

@Controller('billi')
export class BilliController {
  constructor(private readonly catsService: BilliService) {}
  @Get()
  findAll(): string[] {
    return this.catsService.findAll();
  }
  @Get('test')
  getTest(): string[] {
    return this.catsService.getTest();
  }
}
