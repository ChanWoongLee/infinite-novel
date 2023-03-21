import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sentence } from './sentence.schema';
import { Model } from 'mongoose';
import { CreateSentenceDto } from './create-sentence.dto';

@Injectable()
export class SentenceService {
  constructor(
    @InjectModel(Sentence.name) private readonly sentenceModel: Model<Sentence>,
  ) {}
  async findAll() {
    return this.sentenceModel.find();
  }

  async findByNovel(novelId: string) {
    return this.sentenceModel.find({
      novelId: novelId,
    });
  }

  async createSentence(createSentenceDto: CreateSentenceDto) {
    return this.sentenceModel.create(createSentenceDto);
  }

  async deleteSentence(novelId: string) {
    return this.sentenceModel.deleteOne({
      _id: novelId,
    });
  }
}
