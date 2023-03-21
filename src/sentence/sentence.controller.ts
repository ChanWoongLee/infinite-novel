import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Render,
  Res,
} from '@nestjs/common';
import { SentenceService } from './sentence.service';
import { CreateSentenceDto } from './create-sentence.dto';

@Controller('sentence')
export class SentenceController {
  constructor(private readonly sentenceService: SentenceService) {}

  @Post()
  async createSentence(
    @Body() createSentenceDto: CreateSentenceDto,
    @Res() res,
  ) {
    await this.sentenceService.createSentence(createSentenceDto);
    res.redirect('/sentence/write/' + createSentenceDto.novelId);
  }

  @Get()
  async findAll() {
    return await this.sentenceService.findAll();
  }

  @Get('write/:novelId')
  @Render('write.ejs')
  async findByNovel(@Param('novelId') novelId: string) {
    const novel = await this.sentenceService.findByNovel(novelId);
    return { novelList: novel, novelId: novelId };
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
