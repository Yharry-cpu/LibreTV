import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 如果你的原文件里有其他配置（如 images 或 output），请保留在下面。如果没有，直接全选覆盖即可 */
  
  // 核心注入：在这里直接把你的密码和 20 个播放源无缝打包成字符串传给网页
  env: {
    PASSWORD: "ali10nmovie",
    DEFAULT_SOURCES: JSON.stringify({
      "cache_time": 7200,
      "api_site": {
        "dyttzy": { "api": "http://dyttzyapi.com", "name": "电影天堂资源", "detail": "http://dyttzyapi.com" },
        "heimuer": { "api": "https://heimuer.xyz", "name": "黑木耳", "detail": "https://heimuer.tv" },
        "ruyi": { "api": "http://rycjapi.com", "name": "如意资源" },
        "bfzy": { "api": "https://bfzyapi.com", "name": "暴风资源" },
        "tyyszy": { "api": "https://tyyszy.com", "name": "天涯资源" },
        "ffzy": { "api": "http://ffzy5.tv", "name": "非凡影视", "detail": "http://ffzy5.tv" },
        "zy360": { "api": "https://360zy.com", "name": "360资源" },
        "maotaizy": { "api": "https://maotaizy.cc", "name": "茅台资源" },
        "wolong": { "api": "https://wolongzyw.com", "name": "卧龙资源" },
        "jisu": { "api": "https://jszyapi.com", "name": "极速资源", "detail": "https://jszyapi.com" },
        "dbzy": { "api": "https://dbzy.tv", "name": "豆瓣资源" },
        "mozhua": { "api": "https://mozhuazy.com", "name": "魔爪资源" },
        "mdzy": { "api": "https://mdzyapi.com", "name": "魔都资源" },
        "zuid": { "api": "https://zuidapi.com", "name": "最大资源" },
        "yinghua": { "api": "https://apiyhzy.com", "name": "樱花资源" },
        "wujin": { "api": "https://wujinapi.me", "name": "无尽资源" },
        "wwzy": { "api": "https://wwzy.tv", "name": "旺旺短剧" },
        "ikun": { "api": "https://ikunzyapi.com", "name": "iKun资源" },
        "lzi": { "api": "https://lziapi.com", "name": "量子资源站" },
        "xiaomaomi": { "api": "https://xmm.hk", "name": "小猫咪资源" }
      }
    })
  }
};

export default nextConfig;

