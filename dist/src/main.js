"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.setGlobalPrefix(configService.get('app.prefix'));
    app.enableCors();
    const options = new swagger_1.DocumentBuilder()
        .setTitle('服务发布系统接口规范')
        .setDescription('用于提供关于服务发布系统的开发接口和调用参数')
        .setVersion('0.0.1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api-doc', app, document);
    await app.listen(configService.get('app.port'), () => {
        common_1.Logger.log(`服务启动环境 ${process.env.NODE_ENV || 'development'},接口请访问 http://localhost:${configService.get('app.port')},`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map