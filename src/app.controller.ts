import {
  Controller,
  Get,
  Render,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  getHello(): any {
    throw new Error('Method not implemented.');
  }
  @Get()
  @Render('view.ejs')
  async view() {
    let novel: { title: string; count: number }[] = [
      { title: '어린왕자', count: 4 },
      { title: '슬램덩크', count: 3 },
      { title: '인어공주', count: 5 },
      { title: '아기돼지3형제', count: 1 },
    ];

    return { novelList: novel };
  }
}
