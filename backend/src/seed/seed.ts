import * as mongoose from 'mongoose';
import { TransactionStatus } from '../transactions/schemas/transaction.schema';

const statuses = [
  TransactionStatus.SUCCESSFUL,
  TransactionStatus.FAILED,
  TransactionStatus.PENDING,
];

async function seed() {
  await mongoose.connect(
    process.env.MONGO_URI || 'mongodb://localhost:27017/refund_portal',
  );

  const Transaction = mongoose.model(
    'Transaction',
    new mongoose.Schema({}, { strict: false }),
  );

  const transactions: any[] = [];

  for (let i = 0; i < 500; i++) {
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    transactions.push({
      transactionId: `TXN${100000 + i}`,
      merchantId: '69ae867332da09bc116509d9',
      amount: Math.floor(Math.random() * 1000) + 100,
      status: randomStatus,
      createdAt: new Date(Date.now() - Math.random() * 30 * 86400000),
    });
  }

  await Transaction.insertMany(transactions);

  console.log('500 transactions inserted');

  process.exit();
}

seed();
