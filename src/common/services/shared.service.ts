import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { BilliService } from 'src/modules/billi/billi.service';

@Injectable()
export class SharedLoggerService { //Module bina aau ley use gardai chan
    //  private readonly billyService: BilliService //not dependency ijection
       constructor(
        @Inject(forwardRef(() => BilliService))
     private readonly billyService: BilliService //hlcha
         

       ) {}
  log(message: string) {
    console.log("Hello bro");
  }
  test() {
    this.billyService.findAll();
    console.log('SharedLoggerService: test called');
  }
}