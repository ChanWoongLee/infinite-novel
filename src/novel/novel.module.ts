import { Module } from '@nestjs/common';
import { NovelService } from './novel.service';
import { NovelController } from './novel.controller';
import { Novel, NovelSchema } from './novel.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Novel.name, schema: NovelSchema }]),
  ],
  controllers: [NovelController],
  providers: [NovelService],
})
export class NovelModule {}
