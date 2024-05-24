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
  <main>
    <ContentDoc v-slot="{ doc }" tag="article">
      <article>
        <h1>{{ doc.title }}</h1>
        <time class="relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5">
          <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
            <span class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500" />
          </span>
          {{ doc.published }}
        </time>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>

<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
