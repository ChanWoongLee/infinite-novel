import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Get('/:novelId')
  async findByNovel(@Param('novelId') novelId: string) {
    return await this.sentenceService.findByNovel(novelId);
  }

  @Delete('/:novelId')
  async deleteSentence(@Param('novelId') novelId: string) {
    return await this.sentenceService.deleteSentence(novelId);
  }
}
