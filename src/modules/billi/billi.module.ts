import { Module } from '@nestjs/common';
import { BilliController } from './billi.controller';
import { BilliService } from './billi.service';
import { CatsModule } from '../cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [BilliController],
  providers: [BilliService],
  exports: [BilliService],
})
export class BilliModule {}
