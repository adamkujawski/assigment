import { Test, TestingModule } from '@nestjs/testing';
import { InputParserController } from './input-parser.controller';

describe('InputParserController', () => {
  let controller: InputParserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InputParserController],
    }).compile();

    controller = module.get<InputParserController>(InputParserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
