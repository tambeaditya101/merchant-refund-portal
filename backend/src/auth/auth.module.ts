import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MerchantsModule } from '../merchants/merchants.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    MerchantsModule,
    JwtModule.register({
      secret: 'supersecret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
