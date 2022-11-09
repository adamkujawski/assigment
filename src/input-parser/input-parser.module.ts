import { Module } from '@nestjs/common';
import { InputParserController } from './input-parser.controller';
import { InputParserService } from './input-parser.service';

@Module({
  controllers: [InputParserController],
  providers: [InputParserService]
})
export class InputParserModule {}
