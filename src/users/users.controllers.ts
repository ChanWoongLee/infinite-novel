import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

import { UsersRequestDto } from './users.request.dto';

@Controller('google')
export class GoogleController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.usersService.signUp(req);
  }
}
