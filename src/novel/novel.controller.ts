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
import { UpdateNovelDto } from './dto/update-novel.dto';

@Controller('novel')
export class NovelController {
  constructor(private readonly novelService: NovelService) {}

  @Post()
  create(@Body() createNovelDto: CreateNovelDto) {
    return this.novelService.create(createNovelDto);
  }

  @Get()
  findAll() {
    return this.novelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.novelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNovelDto: UpdateNovelDto) {
    return this.novelService.update(+id, updateNovelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novelService.remove(+id);
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
