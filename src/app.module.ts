import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { config } from 'dotenv';
import { NovelModule } from './novel/novel.module';
import { MyPageModule } from './mypage/mypage.module';

config();
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL, { dbName: 'infinite-novel' }),
    UsersModule,
    NovelModule,
    MyPageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
