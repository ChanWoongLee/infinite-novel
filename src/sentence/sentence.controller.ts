import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SentenceService } from './sentence.service';
import { CreateSentenceDto } from './create-sentence.dto';

@Controller('sentence')
export class SentenceController {
  constructor(private readonly sentenceService: SentenceService) {}

  @Post()
  createSentence(@Body() createSentenceDto: CreateSentenceDto) {
    return this.sentenceService.createSentence(createSentenceDto);
  }

  @Get()
  findAll() {
    return this.sentenceService.findAll();
  }

  @Get('/:novelId')
  findByNovel(@Param('novelId') novelId: string) {
    return this.sentenceService.findByNovel(novelId);
  }

  @Delete('/:novelId')
  deleteSentence(@Param('novelId') novelId: string) {
    return this.sentenceService.deleteSentence(novelId);
  }
}
