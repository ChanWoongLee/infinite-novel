import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GoogleController } from './users.controllers';
import { UsersService } from './users.service';
import { User, UserSchema } from './users.schema';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [GoogleController],
  providers: [UsersService, GoogleStrategy],
})
export class UsersModule {}
