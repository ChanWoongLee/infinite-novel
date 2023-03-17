import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './users.schema';
import { UsersRequestDto } from './users.request.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  async signUp(req) {
    //const { email, lastName } = body;
    const email = req.user.email;
    const lastName = req.user.lastName;

    const isUserExist = await this.userModel.exists({ email });

    if (isUserExist) {
      throw new UnauthorizedException('Already exists the User!');
    }

    // const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      email,
      lastName,
    });
    console.log(user);
    user.save();
    return user.readOnlyData;
  }

  getHello(): string {
    throw new Error('Method not implemented.');
  }
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}
