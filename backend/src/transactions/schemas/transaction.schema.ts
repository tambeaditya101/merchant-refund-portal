import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TransactionDocument = Transaction & Document;

export enum TransactionStatus {
  SUCCESSFUL = 'SUCCESSFUL',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  REFUNDED = 'REFUNDED',
}

@Schema({ timestamps: true })
export class Transaction {
  @Prop({ required: true })
  transactionId: string;

  @Prop({ type: Types.ObjectId, ref: 'Merchant' })
  merchantId: Types.ObjectId;

  @Prop({ required: true })
  amount: number;

  @Prop({
    enum: TransactionStatus,
    default: TransactionStatus.PENDING,
  })
  status: TransactionStatus;

  @Prop()
  createdAt: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
