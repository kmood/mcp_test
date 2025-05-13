import { Logger } from 'winston';
import 'winston-daily-rotate-file';
import { ConfigService } from '@nestjs/config';
export declare class LoggerService {
    private configService;
    private context?;
    private logger;
    setContext(context: string): void;
    constructor(configService: ConfigService);
    error(ctx: any, message: string, meta?: Record<string, any>): Logger;
    warn(ctx: any, message: string, meta?: Record<string, any>): Logger;
    debug(ctx: any, message: string, meta?: Record<string, any>): Logger;
    info(ctx: any, message: string, meta?: Record<string, any>): Logger;
    log(level: string, message: string): Logger;
}
