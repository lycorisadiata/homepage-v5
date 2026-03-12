<script setup lang="ts">
import { ZhiluIcon, ZhiluIconOld } from '#components'

useHead({ title: '日志' })
definePageMeta({ headerText: '互联网上的活动记录' })

const timeline = {
	'2026-03-13': ['博客：迁移使用 Clarity，并更换域名 ', h('code', 'trytobetter.cn')],
}
</script>

<template>
<ZTimeline :timeline />
</template>
