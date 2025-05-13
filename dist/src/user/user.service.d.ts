import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
export declare class UserService {
    private userRepository;
    private configService;
    constructor(userRepository: Repository<User>, configService: ConfigService);
    getList(): Promise<any>;
}
