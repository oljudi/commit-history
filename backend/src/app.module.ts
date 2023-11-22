import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './API/api.module';

@Module({
  imports: [ConfigModule.forRoot(), ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
