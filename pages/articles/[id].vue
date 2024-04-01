<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <ContentDoc v-slot="{ doc }" tag="article">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </main>
</template>
<script setup>
const {
  public: { title, siteUrl },
} = useRuntimeConfig();
const route = useRoute();
const { id } = route.params;
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${title}` : title;
  },
});
useSeoMeta({
  ogUrl: `${siteUrl}/articles/${id}`,
  ogImage: `${siteUrl}/articles/${id}.png`, // 分享内容时显示的图像的 URL。
  twitterCard: "summary_large_image", // 推特分享卡片风格
  articleAuthor: "cz6",
});
</script>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
