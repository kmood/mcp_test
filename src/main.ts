import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
// import { writeFileSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());
  // app.enableCors();

  // 获取环境配置
  const configService = app.get(ConfigService);
  app.setGlobalPrefix(configService.get<string>('app.prefix')); //设置全局路由
  app.enableCors(); // 启用全局跨域支持
  // 设置请求体的最大大小为 10MB
  // app.use(bodyParser.json({ limit: '10mb' }));
  // app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  // 配置swagger
  // DocumentBuilder是一个辅助类，有助于结构的基本文件SwaggerModule。它包含几种方法，可用于设置诸如标题，描述，版本等属性。
  const options = new DocumentBuilder()
    .setTitle('服务发布系统接口规范')
    .setDescription('用于提供关于服务发布系统的开发接口和调用参数') // 文档介绍
    .setVersion('0.0.1') // 文档版本
    .build();
  // 为了创建完整的文档（具有定义的HTTP路由），我们使用类的createDocument()方法SwaggerModule。此方法带有两个参数，分别是应用程序实例和基本Swagger选项。
  const document = SwaggerModule.createDocument(app, options);
  // 写入swagger.json文件
  // writeFileSync('./public/swagger.json', JSON.stringify(document));
  // 最后一步是setup()。它依次接受（1）装入Swagger的路径，（2）应用程序实例, （3）描述Nest应用程序的文档。
  SwaggerModule.setup('api-doc', app, document);

  // 接受并以环境配置中设置的端口启动服务
  await app.listen(configService.get<number>('app.port'), () => {
    Logger.log(
      `服务启动环境 ${process.env.NODE_ENV || 'development'
      },接口请访问 http://localhost:${configService.get<number>('app.port')},`,
    );
  });
}
bootstrap();
