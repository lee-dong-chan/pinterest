import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

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
    @Query('limit') limit: number,
  ) {
    return this.appService.getlist(id, keyword, page, limit);
  }

  @Get('/list/:id')
  catelist(
    @Param('id') id: number,
    @Query('keyword') keyword: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.appService.getlist(id, keyword, page, limit);
  }

  @Get('/getpost/:id')
  postinfo(@Param('id') id: number) {
    return this.appService.getpost(id);
  }

  @Get('/myinfo/:id')
  test(@Param('id') id: number) {
    return this.appService.myinfo(id);
  }

  @Post('/GoogleCallback')
  google(
    @Query('code') code: string,
    @Body('callbackUrl') callbackUrl: string,
    @Req() req: Request,
  ) {
    return this.appService.google(code, callbackUrl, req);
  }

  @Post(`/upload`)
  @UseInterceptors(
    FileInterceptor('File', {
      storage: diskStorage({
        destination: '/var/www/pinterestback/upload/',
        filename(req, file, callback) {
          return callback(null, `${Date.now()}${file.originalname}`);
        },
      }),
    }),
  )
  imgupload(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return file;
  }
}
