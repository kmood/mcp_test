"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
const winston_1 = require("winston");
require("winston-daily-rotate-file");
const config_1 = require("@nestjs/config");
let LoggerService = class LoggerService {
    setContext(context) {
        this.context = context;
    }
    constructor(configService) {
        this.configService = configService;
        this.logger = (0, winston_1.createLogger)({
            format: winston_1.format.combine(winston_1.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston_1.format.prettyPrint()),
            transports: [
                new winston_1.transports.Console(),
                new winston_1.transports.DailyRotateFile({
                    dirname: 'src/logs',
                    filename: 'application-%DATE%.info.log',
                    datePattern: 'YYYY-MM-DD',
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles: '7d',
                    format: winston_1.format.combine(winston_1.format.timestamp({
                        format: 'YYYY-MM-DD HH:mm:ss',
                    }), winston_1.format.json()),
                    level: 'log',
                }),
                new winston_1.transports.DailyRotateFile({
                    dirname: 'src/logs',
                    filename: 'application-%DATE%.error.log',
                    datePattern: 'YYYY-MM-DD',
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles: '14d',
                    format: winston_1.format.combine(winston_1.format.timestamp({
                        format: 'YYYY-MM-DD HH:mm:ss',
                    }), winston_1.format.json()),
                    level: 'error',
                }),
            ],
        });
    }
    error(ctx, message, meta) {
        return this.logger.error(Object.assign({ message, contextNmae: this.context, ctx }, meta));
    }
    warn(ctx, message, meta) {
        return this.logger.warn(Object.assign({ message, contextNmae: this.context, ctx }, meta));
    }
    debug(ctx, message, meta) {
        return this.logger.debug(Object.assign({ message, contextNmae: this.context, ctx }, meta));
    }
    info(ctx, message, meta) {
        return this.logger.info(Object.assign({ message, contextNmae: this.context, ctx }, meta));
    }
    log(level, message) {
        return this.logger.log(level, message);
    }
};
LoggerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], LoggerService);
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map