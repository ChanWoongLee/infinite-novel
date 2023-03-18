import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { config } from 'dotenv';
import { NovelModule } from './novel/novel.module';

config();
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL, { dbName: 'infinite-novel' }),
    UsersModule,
    NovelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
