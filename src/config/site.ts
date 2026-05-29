const website = (import.meta.env.PUBLIC_SITE_URL || "https://imai.chat").replace(/\/$/, "");

export const SITE = {
  website,
  author: "Yikai Lu",
  profile: "产品 / AI / 工程实践",
  title: "Yikai 的工作与学习笔记",
  description: "一个专注记录工作方法、技术学习和长期思考的中文个人博客。",
  lang: "zh-CN",
  ogLocale: "zh_CN",
  keywords: ["个人博客", "工作复盘", "学习方法", "AI", "SEO", "中文博客"],
  socialImage: "/social-card.png",
  socialImageAlt: "Yikai 的工作与学习笔记分享图",
  nav: [
    { href: "/", label: "首页" },
    { href: "/about/", label: "关于" },
    { href: "/rss.xml", label: "RSS" }
  ]
} as const;
