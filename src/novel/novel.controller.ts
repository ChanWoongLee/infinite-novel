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
  Render,
  Res,
} from '@nestjs/common';
import { NovelService } from './novel.service';
import { CreateNovelDto } from './dto/create-novel.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('novel')
export class NovelController {
  constructor(private readonly novelService: NovelService) {}

  // @UseGuards(AuthGuard('google'))
  @Post()
  async create(@Body() createNovelDto: CreateNovelDto, @Res() res) {
    await this.novelService.create(createNovelDto);
    res.redirect('/novel');
  }

  @Get()
  @Render('view.ejs')
  async findAll() {
    const novelList = await this.novelService.findAll();
    return {
      novelList,
    };
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
