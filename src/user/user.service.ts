import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { ConfigService } from '@nestjs/config';
// import { config } from 'dotenv';
// import seerConfig from '../../config/index'


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private configService: ConfigService
  ) { }


  async getList() {
    let result: { code: number, msg: string, data: object; } = { code: 1, msg: "查询错误", data: {} };
    console.log('llllll', this.configService.get<string>('DATABASE_CONFIG.type'), process.env.DATABASE_PASSWORD, process.env.type, process.env.NODE_ENV);
    const data: any = await getManager().query('select id from "user" ').catch(err => {
      console.log('hhhh', err);
      result.code = 0;
      result.msg = 'hhh777';
      result.data = err;
    });
    let result1 = '';
    // console.log("...", data )
    if (data == undefined || data == null) {
      return result;
    }
    return data;
    // return this.userRepository.find()
  }
}
