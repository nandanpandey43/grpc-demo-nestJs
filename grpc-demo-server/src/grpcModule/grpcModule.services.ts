import { Injectable } from '@nestjs/common';

@Injectable()
export class GRpcModuleServices {

  accumulate(data: number[]): number {
    return (data || []).reduce((a, b) => Number(a) + Number(b));
  }

  greeting(data: string): string {
    return "Good Morning " + data;
  }
}
