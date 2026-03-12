import type { Nav } from '~/types/nav'
import { h } from 'vue'
import homepageConfig from '~~/homepage.config'

// 图标查询：https://yesicon.app/ph
// 图标插件：https://marketplace.visualstudio.com/items?itemName=antfu.iconify

export default defineAppConfig({
	...homepageConfig,

	footer: [
		`© ${new Date().getFullYear()} Murphy (lycorsiradiata)`,
		h('a', { href: 'https://beian.miit.gov.cn/', target: '_blank', rel: 'noopener nofollow' }, '火星ICP备20260313号'),
	],

	// 用于在主页展示下游引用
	// 用于显示原作者
	fork: [
		{
			img: 'https://www.zhilu.site/api/avatar.png',
			link: 'https://www.zhilu.site/',
			text: '纸鹿本鹿',
		},
	],

	nav: [
		{
			title: '',
			items: [
				{ icon: 'ri:id-card-line', text: '简介', url: '/' },
				{ icon: 'ri:quill-pen-line', text: '文章', url: '/article' },
				{ icon: 'ri:code-line', text: '项目', url: '/project' },
				{ icon: 'ri:planet-line', text: '站点', url: '/site' },
				{ icon: 'ri:history-line', text: '日志', url: '/log' },
			],
		},
		{
			title: '社交',
			items: [
				{ icon: 'ri:qq-line', text: 'Q: 739855188', url: '' },
				{ icon: 'ri:mail-line', text: '739855188@qq.com', url: 'mailto:739855188@qq.com' },
				{ icon: 'ri:github-line', text: 'Github', url: 'https://github.com/lycorisradiata' },
			],
		},
	] satisfies Nav,

	themes: {
		light: {
			icon: 'ri:sun-line',
			tip: '浅色模式',
		},
		system: {
			icon: 'ri:tv-2-line',
			tip: '跟随系统',
		},
		dark: {
			icon: 'ri:moon-line',
			tip: '深色模式',
		},
	},
})
