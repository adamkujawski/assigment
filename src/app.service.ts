import { Injectable } from '@nestjs/common';
import * as data from '../data/input.json'

@Injectable()
export class AppService {
  getHello(): string {
    const json = JSON.stringify(data)
    return json;
  }
}
