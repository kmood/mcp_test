module.exports = {
  apps: [{
    name: "nest-typeorm-script", // 应用程序名称
    script: "dist/src/main.js", // 相对于pm2 start的脚本路径
    // max_memory_restart: '512M' // 如果超过指定的内存量，您的应用程序将重新启动
    env: { // 默认环境变量
      "NODE_ENV": "dev"
    },
    env_prod: { // production环境变量
      "NODE_ENV": "prod"
    }
  }]
};