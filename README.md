# nest脚手架——nest-typeorm

## NestJS介绍

A progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications with TypeScript/JavaScript 🚀

[NestJS](https://github.com/nestjs/nest)

## 脚手架初始化

### 基础依赖安装
```bash
$ npm install
```
### 环境配置
环境配置在根目录下的 config 文件夹中，暂时分为开发环境、生产环境和测试环境，根据自己项目配置对环境配置进行修改

- dev.yml --开发环境
- prod.yml --生产环境
- test.yml --测试环境
- configuration.ts --环境变量识别文件，用于判断启动对应环境
> 若需要新增环境变量，如a环境，需要在config文件夹中添加a.yml文件，在a.yml文件中填写相应的环境配置，在configuration.ts中configFileNameObj中添加键值对
```js
const configFileNameObj = {
  dev: 'dev',
  test: 'test',
  prod: 'prod',
  a: 'a' //新增a环境变量
};
```
## 新增模块命令

### 按步骤创建
nest g module/mo cats 命令新建cats模块
1. 新建了cats文件夹并在该文件夹下新建了cats.modules.ts 文件
2. 将cats.modules 在app.modules.ts文件下注册
>生成一个模块以保持代码有条理并建立清晰的边界（对相关组件进行分组）

nest g controller/co cats 命令新建cats控制器
1. 在cats文件夹下新建了cats.controller.ts和cats.controller.spec.ts文件
2. 在cats.modules.ts文件里注入了cat.controller.ts
>生成一个控制器来定义 CRUD 路由

nest g service/s cats / nest g provider cats 命令新建cats服务
1. 在cats文件夹下新建了cats.service.ts和cats.service.spec.ts文件
2. 在cats.modules.ts文件里注入了cat.service.ts
>生成一个服务来实现和隔离业务逻辑

可添加--no-spec生成不带测试文件

### 快速生成
nest g resource 组件名称,一键式 CRUD 生成,会自动生成所有样板代码，不仅生成所有 NestJS 构建块（模块、服务、控制器类），还生成实体类、DTO 类以及测试（.spec）文件
```bash
nest g resource cats
```
## 实体生成
### 实体文件存放位置
1. 可以存放到对应的模块的文件夹下的entities文件夹下，如cat.entity.ts存放在./src/cats/entities/下
2. 考虑到存在会有实体被多个模块引用，可以将实体文件统一放到./src/entities下
>可以根据自己的项目需求和组织结构来调整文件夹结构，只需确保实体文件被合理地放置在能够方便访问和管理的位置即可
### 生成实体文件
当然可以手动写，只要格式正确，或者：

安装使用typeorm-model-generator

`npm i -g -D typeorm-model-generator `  

- -h localhost -d 数据库名字 -p 端口 -u 用户名 -x 密码 -e 数据库类型
- -o entities 表示输出到指定的文件夹
- --noConfig true 表示不生成 ormconfig.json 和 tsconfig.json 文件
- --ce pascal 表示将类名转换首字母是大写的驼峰命名
- --cp camel 表示将数据库中的字段比如 create_at 转换为 createAt
- --cp none 取消数据库字段转小驼峰
- --tables [""] 生成指定表的实体文件 [参数无效，会导致报错(表名存在_会出现问题)]
- --skipTables 跳过某些文件 [参数无效，会导致报错(表名存在_会出现问题)]

```
npx typeorm-model-generator --cp none  --noConfig true -h host -d database -p port -u username -x password -e postgres -o ./src/cats/entities --tables your_table_name
```
>--tables后面可以填写具体生成某张数据表结构的实体文件

### TypeORM
[TypeORM](https://typeorm.bootcss.com/)是一个用于Node.js和TypeScript的ORM(对象关系映射库)，提供Api来操作生成的实体，实现对数据库的增删改查

>跟之前使用的Sequelize很类似，可以看上面TypeORM官网，一些特殊的SQL语句或者事务写法，可以看电子围栏、服务发布和制图打印这些


## 返回数据规范
补充

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# debug watch mode
$ npm run start:debug
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 部署应用
### 打包
```bash
npm run build
```
执行打包命令，在根目录下生成dist目录，dist里包含环境配置config文件夹和业务代码src文件夹

### 应用启动
使用[pm2](https://pm2.fenxianglu.cn/docs/start)进行项目部署管理
```bash
npm i -g pm2
```
使用**pm2 init simple**生成[ecosystem.config.js](ecosystem.config.js)配置文件


* env为默认环境变量（dev），只要启动应用：pm2 start ecosystem.config.js，会使用开发环境（dev.yml）里的环境配置
* prod 为生产环境，对应调用方式是：pm2 start ecosystem.config.js --env prod，会使用生产环境（prod.yml）里的环境配置，
>[ecosystem.config.js](ecosystem.config.js)配置文件中定义 env_ 开头的属性，那么就用 --env 参数调用

### 打包文件部署
若不是整个项目代码放到部署服务器上，可以将dist文件目录、node_modules依赖库目录和[ecosystem.config.js](ecosystem.config.js)配置文件这三个部署在服务器就可以，后期可以把[ecosystem.config.js](ecosystem.config.js)配置文件打包到dist中

## 接口文档（swagger可选，要求用Apifox）

[Swagger UI](http://localhost:port/api-doc)


## 接口命名规范
 ## 工程CI
 ### 基本特性
- 支持备份上一次更新代码。
- 支持更新过程中失败回滚。
- 支持依赖库更新可选安装，默认不会npm i安装依赖,可通过添加refresh 变量控制安装刷新。
 ### CI 配置更新
 CI脚本如下：
```
variables:
  PROJECT_GIS: "/data/test/testdir"
job build gis:
 stage: deploy
 tags: 
  - 204-share
 script:
  - nvm use 16.16.0
  - mkdir -p "$PROJECT_GIS"
  - |
      if [ $refresh == "0" ]; then
        ./gitlabcicd.py -r 0 -d "$CI_PROJECT_DIR" -t "$PROJECT_GIS"
        echo "运行命令：./gitlabcicd.py -r 0 -d "$CI_PROJECT_DIR" -t "$PROJECT_GIS"" 
      else 
	  	npm i
        ./gitlabcicd.py -r 1 -d "$CI_PROJECT_DIR" -t "$PROJECT_GIS"
        echo "运行命令：./gitlabcicd.py -r 1 -d "$CI_PROJECT_DIR" -t "$PROJECT_GIS""
      fi
  - cd "$PROJECT_GIS"
  - npm rebuild && npm run stopgis && npm run startgis
 only: 
  - master
```
新项目可依次做如下调整：
1. 调整 “PROJECT_GIS” 变量路径，此为部署路径；
1. 可选切换 node 版本，需要服务器上部署nvm；
1. 更新 "npm run stopgis && npm run startgis" 启动停止命令  
PS: 
- 初次部署或者需要更新 node_modules 可通过Gitlab CI/CD->运行流水线，手动启动更新，并设置refresh变量为1.
- python>=2.7
后续补充
