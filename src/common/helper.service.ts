import { Injectable } from '@nestjs/common';

@Injectable()
export class HelperService {
  getResult(
    code: number,
    msg: string,
    data?: object | string | null | boolean,
  ): {
    code: number;
    msg: string;
    data?: object | string | null | boolean;
  } {
    const result: {
      code: number;
      msg: string;
      data?: object | string | null | boolean;
    } = {
      code: code,
      msg: msg,
      data: data,
    };
    return result;
  }

  convertJSON(jsonString) {
    let result = jsonString;
    if (jsonString === undefined || jsonString === '' || jsonString === null) {
      result = {};
      return result;
    }
    if (typeof jsonString === 'string') {
      result = JSON.parse(jsonString);
    }
    return result;
  }
}
