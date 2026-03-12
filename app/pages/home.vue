<script setup lang="ts">
useHead({ title: '' })
definePageMeta({
	alias: ['/'],
	title: '主页',
})
const appConfig = useAppConfig()
</script>

<template>
<ZhiluAvatar class="avatar" />

<div class="wrapper">
	<ZField>
		<template #label>
			<span style="font-size: 3rem;">👋</span>
		</template>
		<h1 style="font-size: 3rem;">
			你好，我是<mark>{{ appConfig.author.name }}</mark>
		</h1>
		<p class="desc">
			{{ appConfig.subtitle }}
		</p>
		<div>
			<ZButton
				icon="ri:file-list-3-line"
				to="https://blog.trytobetter.cn/"
				text="博客"
				primary
			/>
			<ZButton
				icon="ri:github-line"
				to="https://github.com/lycorisradiata"
				text="GitHub"
			/>
		</div>
	</ZField>

	<ZField label="介绍">
		<p>一只将从事后端开发, 正在转向全栈工程师(AI也在学习中)的恐龙。</p>
		<p>正在学习并开发博客网站，你可以在博客或QQ和我交流。</p>
	</ZField>

	<ZField label="近期活动">
		<p>2026年3月学习并修改<ZLink to="https://blog.trytobetter.cn/">Murphy Station</ZLink>博客。</p>
	</ZField>

	<ZField label="关于主页">
		<p>
			主页使用
			<ZLink to="https://github.com/L33Z22L11/homepage-v5" icon="ri:github-line">L33Z22L11/homepage-v5</ZLink>
			开源项目, 感谢纸鹿佬的开源：
		</p>
		<p><ZBadge v-for="item in appConfig.fork" :key="item.link" v-bind="item" /></p>
	</ZField>
</div>
</template>

<style lang="scss" scoped>
.avatar {
	position: fixed;
	opacity: 0.2;
	right: 20vw;
	margin-right: -0.382em; // (1 - √5)/2
	mask-image: radial-gradient(#FFF 43.7%, transparent 70.7%); // (√5 - 1) / 2 x, x = √2 / 2
	font-size: min(100vw, 61.8vh);
	z-index: -1;
}

.desc {
	margin: 1rem 0;
	font-size: 1.5rem;
	color: var(--c-text-2);
}
</style>
