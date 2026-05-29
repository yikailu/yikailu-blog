const website = (import.meta.env.PUBLIC_SITE_URL || "https://imai.chat").replace(/\/$/, "");

export const SITE = {
  website,
  author: "Yikai Lu",
  profile: "创业 / 产品 / 增长",
  title: "聊聊我和AI",
  description: "记录创业历程，分享关于产品、增长、以及AI实践方面学习心得。",
  lang: "zh-CN",
  ogLocale: "zh_CN",
  keywords: ["个人博客", "创业", "独立站", "SaaS产品", "Meta广告", "SEO", "AI相关", "实践方法", "形而上学", "中文博客"],
  topics: ["创业", "独立站", "SaaS产品", "Meta广告", "SEO", "AI相关", "实践方法", "形而上学"],
  socialImage: "/social-card.png",
  socialImageAlt: "Yikai 的工作与学习笔记分享图",
  nav: [
    { href: "/", label: "首页" },
    { href: "/about/", label: "关于" }
  ]
} as const;
