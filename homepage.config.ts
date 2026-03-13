// 存储 nuxt.config 和 app.config 共用的配置

import type { NitroConfig } from 'nitropack'

const author = {
	name: 'Murphy',
	avatar: '',
	email: '739855188@qq.com',
	homepage: 'https://www.trytobetter.cn/',
}

const homepageConfig = {
	title: 'Murphy (@lycorisradiata)',
	subtitle: '所愿皆得, 都要好好的',
	description: 'Murphy（也称作萧羿、lycorisradiata）是一名随心开发者，这是Murphy的个人主页。他的博客是「Murphy Station」，会记录一些有的没的, 可能会分享一些有用的东西。',
	author,
	language: 'zh-CN',
	timezone: 'Asia/Shanghai',
	favicon: '/icon.png',
	url: 'https://www.trytobetter.cn/',
	blogAtom: 'https://blog.trytobetter.cn/atom.xml',
}

// https://nitro.build/config#routerules
export const routeRules: NitroConfig['routeRules'] = {
	'/api/avatar.png': { redirect: author.avatar },
	'/api/icon.png': { redirect: homepageConfig.favicon },
	'/favicon.ico': { redirect: homepageConfig.favicon },
}

export default homepageConfig
