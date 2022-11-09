import { Test, TestingModule } from '@nestjs/testing';
import { InputParserService } from './input-parser.service';
import * as data from "../../data/input.json";

describe('InputParserService', () => {
  let service: InputParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InputParserService],
    }).compile();

    service = module.get<InputParserService>(InputParserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('Data should be JSON data',()=>{
  expect(JSON.stringify(data)).not.toBeUndefined()
})


