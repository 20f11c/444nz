export const scripts = [
  {
    title: '八叉书库广告屏蔽',
    version: 'v1.2.3',
    status: '稳定版',
    updatedAt: '2026-03-30',
    description: '针对八叉书库页面进行广告清理和交互优化，支持多种用户脚本扩展安装与运行。',
    tags: ['去广告', '弹窗拦截', '0 金币自动订阅'],
    matchSites: '八叉书库相关页面',
    installUrl: 'https://raw.githubusercontent.com/20f11c/cgh/main/bcskadx.user.js',
    sourceUrl: 'https://github.com/20f11c/cgh',
    supportedExtensions: ['Tampermonkey', 'Violentmonkey', 'Userscripts', 'ScriptCat'],
    highlights: [
      '屏蔽页面广告 iframe / script / ins 及站内广告脚本',
      '清理推荐广告模块、广告图片与落地链接',
      '拦截广告域名相关弹窗（window.open）',
      '免费章节（0 金币）自动订阅，内置防抖保护'
    ],
    installSteps: [
      '先安装任一用户脚本扩展（Tampermonkey / Violentmonkey / Userscripts / ScriptCat）。',
      '点击“一键安装”或复制安装链接，在扩展中导入脚本。',
      '后续通过自动更新机制获取新版本。'
    ],
    updateTip: '发布新版本时请递增 @version，如遇站点改版可按需更新匹配规则。'
  }
];

export const repoInfo = {
  name: '20f11c脚本库',
  owner: '20f11c/cgh',
  githubUser: '20f11c',
  email: '888@777.ga',
  domain: '444.nz',
  copyright: '20f11c',
  url: 'https://github.com/20f11c/cgh'
};
