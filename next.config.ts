import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 核心注入：严格遵守 LibreTV 官方 [名称, api, 详情] 标准数组格式
  env: {
    PASSWORD: "123456789",
    DEFAULT_SOURCES: '[{"name":"电影天堂资源","api":"http://dyttzyapi.com","detail":"http://dyttzyapi.com"},{"name":"黑木耳","api":"https://heimuer.xyz","detail":"https://heimuer.tv"},{"name":"如意资源","api":"http://rycjapi.com"}]'
  }
};

export default nextConfig;
