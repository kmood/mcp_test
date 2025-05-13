import { Controller, Get, HttpCode, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config'
@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService,
    private configService: ConfigService
  ) { }

  @Get('')
  // @HttpCode(205)
  getHello(@Req() request: Request): string {//,@Res() res : Response
    console.log(request.query)
    return this.appService.getHello();
    // return res.send('lllll')
  }
  @Get('prov')
  // @HttpCode(205)
  getkk(@Req() request: Request): string {//,@Res() res : Response
    console.log(request.query)
    return '77777';
    // return res.send('lllll')
  }
  // @Post()
  // gethhh(){
  //   return '8888s';
  // }
}
