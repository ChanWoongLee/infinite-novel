import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document, ObjectId, SchemaOptions, SchemaTypes } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
  versionKey: false,
};

@Schema(options)
export class Sentence extends Document {
  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  @Prop({
    required: true,
    type: SchemaTypes.ObjectId,
  })
  novelId: string;

  readonly readOnlyData: {
    id: string;
    content: string;
  };
}

export const SentenceSchema = SchemaFactory.createForClass(Sentence);
