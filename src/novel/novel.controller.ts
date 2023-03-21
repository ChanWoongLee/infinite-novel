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
}
