import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
  Render,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  getHello(): any {
    throw new Error('Method not implemented.');
  }
  @Get()
  @Render('view.ejs')
  async view() {
    let novel: any[] = [
      { title: '어린왕자', count: 4 },
      { title: '슬램덩크', count: 3 },
    ];
    console.log(novel);
    return { novelList: novel };
    //return { name: 'peter', age: 28, job: 'software engineer' };
  }
}
