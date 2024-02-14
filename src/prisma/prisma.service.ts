import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
      
    });
    this.$connect()
      .then(() => {
        console.log('connected');
      })
      .catch((err) => {
        console.log('error', err);
      });
  }
}
