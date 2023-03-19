import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Novel } from 'src/novel/novel.schema';

@Injectable()
export class MyPageService {
  constructor(
    @InjectModel(Novel.name) private readonly novelModel: Model<Novel>
  ) { }

  public async findAll(): Promise<any[]> {
    let novels: { title: string; sentence: string[], writer: string; }[] = [
      { title: '어린왕자', sentence: ['어린왕자 시작', '어린왕자가 죽었습니다.'], writer: 'user1' },
    ];

    // await this.novelModel
    //   .find({ writer: 'seohyun' })
    //   .exec();

    const me = 'user1';
    let myNovel = novels.filter(n => n.writer === me);

    return myNovel;

  }
}
