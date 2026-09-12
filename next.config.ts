import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 核心注入：严格遵守 LibreTV 官方 [名称, api, 详情] 标准数组格式
  env: {
    PASSWORD: "123456789",
    DEFAULT_SOURCES: '[{"name":"电影天堂资源","api":"http://dyttzyapi.com","detail":"http://dyttzyapi.com"},{"name":"黑木耳","api":"https://heimuer.xyz","detail":"https://heimuer.tv"},{"name":"如意资源","api":"http://rycjapi.com"},{"name":"暴风资源","api":"https://bfzyapi.com"},{"name":"天涯资源","api":"https://tyyszy.com"},{"name":"非凡影视","api":"http://ffzy5.tv","detail":"http://ffzy5.tv"},{"name":"360资源","api":"https://360zy.com"},{"name":"茅台资源","api":"https://maotaizy.cc"},{"name":"卧龙资源","api":"https://wolongzyw.com"},{"name":"极速资源","api":"https://jszyapi.com","detail":"https://jszyapi.com"},{"name":"豆瓣资源","api":"https://dbzy.tv"},{"name":"魔爪资源","api":"https://mozhuazy.com"},{"name":"魔都资源","api":"https://mdzyapi.com"},{"name":"最大资源","api":"https://zuidapi.com"},{"name":"樱花资源","api":"https://apiyhzy.com"},{"name":"无尽资源","api":"https://wujinapi.me"},{"name":"旺旺短剧","api":"https://wwzy.tv"},{"name":"iKun资源","api":"https://ikunzyapi.com"},{"name":"量子资源站","api":"https://lziapi.com"},{"name":"小猫咪资源","api":"https://xmm.hk"}]'
  }
};

export default nextConfig;
