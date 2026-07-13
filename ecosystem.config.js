// pm2 配置：让 8080 网站常驻运行，崩溃自动拉起、服务器重启后自动启动。
// 用法（在项目目录下）：
//   npm i -g pm2
//   npm run build
//   pm2 start ecosystem.config.js
//   pm2 save && pm2 startup   # 按提示再执行一行，实现开机自启
module.exports = {
  apps: [
    {
      name: "mega-power-8080",
      // 直接调用 next 的可执行文件，避免多套一层 npm 进程
      script: "node_modules/next/dist/bin/next",
      args: "start -p 8080",
      cwd: __dirname,
      env: {
        NODE_ENV: "production",
        PORT: "8080",
      },
      autorestart: true,
      max_restarts: 10,
      // 内存超过 512M 自动重启，防止长期运行内存泄漏拖垮机器
      max_memory_restart: "512M",
    },
  ],
};
