import { Global, Module } from '@nestjs/common';
import { HelperService } from './helper.service';
import { UtilService } from './util.service';
import { TimeutilService } from './timeutil.service';
import { LoggerService } from './logger.service';

@Global()
@Module({
  providers: [HelperService, UtilService, TimeutilService, LoggerService],
  exports: [HelperService, UtilService, TimeutilService, LoggerService],
})
export class CommonModule {}
