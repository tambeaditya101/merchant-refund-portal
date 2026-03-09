import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { MerchantsService } from '../merchants/merchants.service';

@Injectable()
export class AuthService {
  constructor(
    private merchantsService: MerchantsService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const merchant = await this.merchantsService.findByEmail(email);

    if (!merchant) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, merchant.password);

    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.jwtService.sign({
      sub: merchant._id,
      email: merchant.email,
    });

    return {
      accessToken: token,
    };
  }
}
