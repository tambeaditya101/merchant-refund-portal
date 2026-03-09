import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { MerchantsModule } from './merchants/merchants.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI as string),
    MerchantsModule,
    AuthModule,
    TransactionsModule,
  ],
})
export class AppModule {}
