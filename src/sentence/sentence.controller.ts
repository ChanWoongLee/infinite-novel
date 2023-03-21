import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Render,
} from '@nestjs/common';
import { SentenceService } from './sentence.service';
import { CreateSentenceDto } from './create-sentence.dto';

@Controller('sentence')
export class SentenceController {
  constructor(private readonly sentenceService: SentenceService) {}

  @Post()
  async createSentence(@Body() createSentenceDto: CreateSentenceDto) {
    return await this.sentenceService.createSentence(createSentenceDto);
  }

  @Get()
  async findAll() {
    return await this.sentenceService.findAll();
  }

  @Get('write/:novelId')
  @Render('write.ejs')
  async findByNovel(@Param('novelId') novelId: string) {
    let novel: any[] = await this.sentenceService.findByNovel(novelId);
    return { novelList: novel };
  }

  @Delete('/:novelId')
  async deleteSentence(@Param('novelId') novelId: string) {
    return await this.sentenceService.deleteSentence(novelId);
  }

  // @Get('relay/write')
  // @Render('write.ejs')
  // async findAll() {
  //   let novel: { title: string; count: number }[] =
  //     await this.novelService.findAll();

  //   return { noveContent: novel };
  // }
}
