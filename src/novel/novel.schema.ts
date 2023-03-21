import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
  versionKey: false,
};

@Schema(options)
export class Novel extends Document {
  @Prop({
    required: true,
    // unique: true,
  })
  @IsNotEmpty()
  title: string;

  @Prop({
    defaultOptions: 0,
  })
  totalCount: number;

  readonly readOnlyData: {
    id: string;
    title: string;
  };
}

export const NovelSchema = SchemaFactory.createForClass(Novel);
