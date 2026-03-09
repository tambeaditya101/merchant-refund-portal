import { Controller, Get, Query } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Get()
  async getTransactions(@Query() query: any) {
    return this.transactionsService.getTransactions(query);
  }
}
