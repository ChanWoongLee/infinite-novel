import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Novel, NovelSchema } from 'src/novel/novel.schema';
import { MyPageController } from './mypage.controller';
import { MyPageService } from './mypage.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Novel.name, schema: NovelSchema }]),
  ],
  controllers: [MyPageController],
  providers: [MyPageService],
})
export class MyPageModule {}
