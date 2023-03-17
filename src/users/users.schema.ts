import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
  versionKey: false,
};

@Schema(options)
export class User extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Prop({
    // required: true,
  })
  @IsString()
  sns: string;

  readonly readOnlyData: {
    id: string;
    email: string;
    lastName: string;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
