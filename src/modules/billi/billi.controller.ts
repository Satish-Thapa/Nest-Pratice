import { Controller, Get, Post, Param, Query, Body, Headers, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { BilliService } from './billi.service';

@Controller('billi')
export class BilliController {
  constructor(private readonly billiService: BilliService) {}

  @Get()
  findAll(): string[] {
    return this.billiService.findAll();
  }

  @Get('test')
  getTest(): string[] {
    // return this.billiService.getTest();
    return ['test1', 'test2', 'test3'];
  }

  @Get(':id')
  getById(
    @Param('id') id: string,
    @Query('filter') filter: string,
    @Headers('user-agent') userAgent: string,//header ma kk auucha ta
    @Req() req: Request,
    @Res() res: Response,
  ) {
    // Example usage of all decorators
    res.json({
      id,
      filter,
      userAgent,
      ip: req.ip,
      message: 'GET with @Param, @Query, @Headers, @Req, @Res',
    });
  }

  @Post()
  create(
    @Body() body: any,
    @Headers() headers: any,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    res.json({
      body,
      headers,
      ip: req.ip,
      message: 'POST with @Body, @Headers, @Req, @Res',
    });
  }
}
