#!/usr/bin/env bash
# 一键部署 / 重新拉起 8080 网站。在服务器的项目目录里执行： bash deploy.sh
# 只影响 8080 站点，不会碰到 80 端口上的网站。
set -euo pipefail
cd "$(dirname "$0")"

echo "==> 安装依赖"
npm ci 2>/dev/null || npm install

echo "==> 构建生产版本"
npm run build

if command -v pm2 >/dev/null 2>&1; then
  echo "==> 用 pm2 启动/重载（常驻，崩溃自动拉起）"
  pm2 startOrReload ecosystem.config.js
  pm2 save
else
  echo "==> 未检测到 pm2，改用 nohup 临时拉起（注意：关终端后仍会保留，但重启不会自启）"
  echo "    建议装 pm2 常驻： npm i -g pm2 后重新执行本脚本"
  pkill -f "next start -p 8080" 2>/dev/null || true
  PORT=8080 nohup npm run start > /tmp/mega8080.log 2>&1 &
fi

echo "==> 完成。检查端口是否在监听："
sleep 2
ss -tlnp | grep 8080 || echo "8080 还没起来，去看日志： pm2 logs mega-power-8080  或  cat /tmp/mega8080.log"
