import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats') // prefix: /cats
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    return this.catsService.findAll(); // GET /cats
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id); // GET /cats/1
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto); // POST /cats
  }
}
