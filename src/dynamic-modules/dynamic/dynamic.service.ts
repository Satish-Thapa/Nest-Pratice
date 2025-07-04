import { Injectable } from '@nestjs/common';

@Injectable()
export class DynamicService {
  constructor(private readonly options: any) {}

  getOptions() {
    return this.options;
  }
}
