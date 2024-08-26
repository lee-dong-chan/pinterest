import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/category')
  category() {
    return this.appService.category();
  }

  @Get('/logcheck')
  logcheck(@Req() req: Request) {
    return this.appService.logcheck(req);
  }

  @Get('/userdata')
  userdata(@Req() req: Request) {
    return this.appService.userdata(req);
  }

  @Get('/searchtag')
  searchtag(@Param('id') id: number, @Query('keyword') keyword: string) {
    return this.appService.searchtag(id, keyword);
  }

  @Get('/list')
  mainlist(
    @Param('id') id: number,
    @Query('keyword') keyword: string,
    @Query('page') page: number,
  ) {
    return this.appService.getlist(id, keyword, page);
  }

  @Get('/list/:id')
  catelist(
    @Param('id') id: number,
    @Query('keyword') keyword: string,
    @Query('page') page: number,
  ) {
    return this.appService.getlist(id, keyword, page);
  }

  @Get('/getpost/:id')
  postinfo(@Param('id') id: number) {
    return this.appService.getpost(id);
  }

  @Get('/myinfo/:id')
  test(@Param('id') id: number) {
    return this.appService.myinfo(id);
  }
}
