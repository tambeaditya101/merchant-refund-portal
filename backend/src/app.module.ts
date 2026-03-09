import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
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
  controllers: [AppController],
})
export class AppModule {}
