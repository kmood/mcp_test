import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { LoggerService } from './common/logger.service';
import configuration from '../config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { TestModuleModule } from './test-module/test-module.module';

@Module({
  imports: [
    // 全局设置
    ConfigModule.forRoot({
      // 配置为全局可见，否则需要在每个模块中单独导入ConfigModule
      isGlobal: true,
      // 如果设置为true，则启用缓存以避免重复解析和合并配置文件
      cache: true,
      load: [configuration], // 加载自定义配置项
      // 配置文件路径，也可以配置为数组如['/config/.env1','.env']。
      // envFilePath:'.env',
      // 如果设置为true，则不会从.env文件中加载环境变量。常用于生产环境
      // ignoreEnvFile: true,
      // ignoreProcessEnv：如果设置为true，则不会从process.env中加载环境变量
      // ignoreProcessEnv: true,
    }),
    // 连接pg数据库设置
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule], // 数据库配置项依赖于ConfigModule，需在此引入
    //   inject: [ConfigService], // 记得注入服务，否则useFactory函数中获取不到ConfigService
    //   useFactory: (configService: ConfigService) => {
    //     return {
    //       type: 'postgres',
    //       ...configService.get('db.pg'),
    //       entities: ['dist/src/entities/*{.ts,.js}'],
    //       keepConnectionAlive: true,
    //       extra: {
    //         max: 10, // 设置连接池的最大连接数
    //       },
    //     } as TypeOrmModuleOptions;
    //   },
    // }),
    // 连接mongo数据库设置
    // MongooseModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => ({
    //     uri: `mongodb://${configService.get<string>(
    //       'db.mongo.host',
    //     )}:${configService.get<string>(
    //       'db.mongo.port',
    //     )}/${configService.get<string>('db.mongo.database')}`,
    //   }),
    // }),
    CommonModule,
    CatsModule,
    TestModuleModule,
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule { }
