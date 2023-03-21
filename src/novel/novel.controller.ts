import {
  Controller,
  Render,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NovelService } from './novel.service';
import { CreateNovelDto } from './dto/create-novel.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('novel')
export class NovelController {
  constructor(private readonly novelService: NovelService) {}

  // @UseGuards(AuthGuard('google'))
  @Post()
  async create(@Body() createNovelDto: CreateNovelDto) {
    return await this.novelService.create(createNovelDto);
  }

  @Get()
  async findAll() {
    return await this.novelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.novelService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.novelService.remove(id);
  }

  @Get('/relay/write')
  @Render('write.ejs')
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
