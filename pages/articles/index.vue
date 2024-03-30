<template>
  <main class="min-h-screen">
    <AppHeader class="mb-16" title="文章" :description="description" />
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <ArticleCard :article="article" />
      </li>
    </ul>
  </main>
</template>

<script setup>
const {
  public: { title },
} = useRuntimeConfig();
const description = "关于编程、用户界面、产品设计等方面的想法。";
useSeoMeta({
  title: `文章 - ${title}`,
  description,
});

const { data: articles } = await useAsyncData("all-articles", () =>
  queryContent("/articles").sort({ published: -1 }).find()
);
</script>
