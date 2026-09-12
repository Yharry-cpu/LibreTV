import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 核心注入：严格遵守LibreTV官方标准数组格式
  env: {
    PASSWORD: "ali10nmovie",
    DEFAULT_SOURCES: '[{"api":"http://dyttzyapi.com","name":"电影天堂资源"},{"api":"https://heimuer.xyz","name":"黑木耳"},{"api":"http://rycjapi.com","name":"如意资源"},{"api":"https://bfzyapi.com","name":"暴风资源"},{"api":"https://tyyszy.com","name":"天涯资源"},{"api":"http://ffzy5.tv","name":"非凡影视"},{"api":"https://360zy.com","name":"360资源"},{"api":"https://maotaizy.cc","name":"茅台资源"},{"api":"https://wolongzyw.com","name":"卧龙资源"},{"api":"https://jszyapi.com","name":"极速资源"},{"api":"https://dbzy.tv","name":"豆瓣资源"},{"api":"https://mozhuazy.com","name":"魔爪资源"},{"api":"https://mdzyapi.com","name":"魔都资源"},{"api":"https://zuidapi.com","name":"最大资源"},{"api":"https://apiyhzy.com","name":"樱花资源"},{"api":"https://wujinapi.me","name":"无尽资源"},{"api":"https://wwzy.tv","name":"旺旺短剧"},{"api":"https://ikunzyapi.com","name":"iKun资源"},{"api":"https://lziapi.com","name":"量子资源站"},{"api":"https://xmm.hk","name":"小猫咪资源"}]'
  }
};

export default nextConfig;


