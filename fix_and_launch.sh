#!/bin/bash

echo "🔄 开始清理并重置项目..."

# 1. 清理缓存和旧的构建文件
rm -rf ios android node_modules package-lock.json
rm -rf .expo

# 2. 重新安装依赖
echo "📦 正在安装依赖..."
npm install

# 3. 运行 Expo Prebuild 生成 iOS 项目
echo "🛠️ 正在生成 iOS 项目..."
# 使用 --clean 确保清除之前的缓存
npx expo prebuild --platform ios --clean

# 4. 打开 Xcode 工作区
if [ -d "ios/FakeTikTok.xcworkspace" ]; then
    echo "✅ iOS 项目生成成功！"
    echo "🚀 正在打开 Xcode..."
    open ios/FakeTikTok.xcworkspace
else
    echo "❌ 错误：iOS 项目生成失败。"
    echo "请检查上方日志，可能的原因包括："
    echo "1. 网络问题导致 CocoaPods 安装失败（需要科学上网）"
    echo "2. Node.js 环境问题"
    echo "3. 缺少 CocoaPods (请运行 sudo gem install cocoapods)"
fi
