import { Injectable } from '@nestjs/common';
import { CreateNovelDto } from './dto/create-novel.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Novel } from './novel.schema';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class NovelService {
  constructor(
    @InjectModel(Novel.name) private readonly novelModel: Model<Novel>,
  ) {}

  create(createNovelDto: CreateNovelDto) {
    return this.novelModel.create(createNovelDto);
  }

  async findAll() {
    return this.novelModel.find();
  }

  async findOne(id: string) {
    return this.novelModel.findById(id);
  }

  async remove(id: string) {
    return this.novelModel.deleteOne({
      _id: id,
    });
  }
}
