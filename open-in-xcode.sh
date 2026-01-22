#!/bin/bash

# 1. 确保依赖已安装
npm install

# 2. 运行 Expo Prebuild 生成 iOS 项目
# 注意：这需要网络连接来下载 CocoaPods
npx expo prebuild --platform ios

# 3. 打开 Xcode 工作区
if [ -d "ios/FakeTikTok.xcworkspace" ]; then
    echo "正在打开 Xcode..."
    open ios/FakeTikTok.xcworkspace
else
    echo "错误：iOS 项目生成失败，请检查上方错误日志。"
fi
