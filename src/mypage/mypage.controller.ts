import { Controller, Get, Query } from '@nestjs/common';
import { Novel } from 'src/novel/novel.schema';
import { MyPageService } from './mypage.service';

@Controller('mypage')
export class MyPageController {
  constructor(private readonly mypageService: MyPageService) { }

  @Get()
  findAll() {
    return this.mypageService.findAll();
  }
}
