import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction, TransactionDocument } from './schemas/transaction.schema';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
  ) {}

  async getTransactions(query: any) {
    const page = Number(query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const filter: any = {};

    if (query.status && query.status !== 'All') {
      filter.status = query.status;
    }

    if (query.transactionId) {
      filter.transactionId = query.transactionId;
    }

    if (query.fromDate && query.toDate) {
      filter.createdAt = {
        $gte: new Date(query.fromDate),
        $lte: new Date(query.toDate),
      };
    }

    const data = await this.transactionModel
      .find(filter)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await this.transactionModel.countDocuments(filter);

    return {
      data,
      pagination: {
        page,
        totalPages: Math.ceil(total / limit),
        total,
      },
    };
  }
}
