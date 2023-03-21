import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { NovelService } from './novel.service';
import { CreateNovelDto } from './dto/create-novel.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('novel')
export class NovelController {
  constructor(private readonly novelService: NovelService) {}

  // @UseGuards(AuthGuard('google'))
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
    return this.novelService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novelService.remove(id);
  }
}
