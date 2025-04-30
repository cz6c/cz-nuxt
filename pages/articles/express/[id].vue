<script setup lang="ts">
const {
  public: { title, siteUrl },
} = useRuntimeConfig()

const route = useRoute()
const { id } = route.params as Record<string, string>

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${title}` : title
  },
})
useSeoMeta({
  ogUrl: `${siteUrl}/articles/${id}`,
  ogImage: `${siteUrl}/articles/${id}.png`, // 分享内容时显示的图像的 URL。
  twitterCard: 'summary_large_image', // 推特分享卡片风格
  articleAuthor: ['cz6'],
})
</script>

<template>
  <ArticleDetail />
</template>
