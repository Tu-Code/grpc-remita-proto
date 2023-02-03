import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RemitaModule } from './remita/remita.module';
import { RemitaModule } from './remita/remita.module';

@Module({
  imports: [RemitaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
