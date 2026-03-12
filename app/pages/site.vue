<script setup lang="ts">
import type { CardProps } from '~/components/partial/Card.vue'
import { ZLink } from '#components'

useHead({ title: '站点' })
definePageMeta({ headerText: '一些网站' })

const toolSites: Array<CardProps> = [
	{
		name: 'CO导航',
		nameAlt: 'xupt-nav',
		buttons: [
			{ icon: 'ph:planet-duotone', text: '访问', to: 'https://cooo.site' },
			{ icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/xupt-wiki/xupt-nav' },
		],
		desc: '为西安邮电大学学生提供网址导航服务，于2023年2月7日开始运营，是“更适合西邮宝宝体质的网址导航”。',
	},

]

const orgSites: Array<CardProps> = [
	{
		name: '野生技协',
		nameAlt: 'TECHYES',
		buttons: [
			{ icon: 'ph:planet-duotone', text: '访问', to: 'https://thisis.host' },
		],
		desc: [
			'宝鸡中学校内的一个自发性的技术协助组织、无门槛的技术交流群，旨在信息分享、交流与公开，于2020年7月20日对外开放，多个',
			h(ZLink, { to: 'https://thisis.host/site', text: '二级域名' }),
			'为校友提供项目部署服务。官网于2021年8月8日建立，并于2024年2月3日升级为博客。',
		],
	},
]
</script>

<template>
<ZTitle>工具类站点</ZTitle>
<ZCardList :data-list="toolSites" />
<ZTitle>组织门户</ZTitle>
<ZCardList :data-list="orgSites" />
</template>

<style lang="scss" scoped>
</style>
