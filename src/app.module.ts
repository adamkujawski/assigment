import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InputParserModule } from './input-parser/input-parser.module';

@Module({
  imports: [InputParserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
