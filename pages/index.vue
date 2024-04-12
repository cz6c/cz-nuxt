<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

const {
  public: { title },
} = useRuntimeConfig();
useSeoMeta({
  title,
  description:"This personal website integrates life essays and front-end technology sharing, aiming to create a diversified personal online space that not only showcases personal life interests, but also provides valuable professional content for visitors who pay attention to front-end technology"
  // description:
  //   "cz6，是一名前端工程师，来自湖南。专门从事构建web应用程序和网站，使用Javascript、React、Vue、Node。在这里会分享我的实践、项目，以及思考（主要是关于技术和设计）。",
  // ogImage: "/avatar.png",
});

const { data: articles } = await useAsyncData("articles-home", () =>
  queryContent("/articles").sort({ published: -1 }).limit(3).only(["title", "description", "published", "_path"]).find()
);
</script>

<template>
  <div>
    <Suspense>
      <ClientOnly>
        <PageView />
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
    <div>
        <h2 class="uppercase text-base font-semibold text-gray-400 mb-6">最近的文章</h2>
        <ul class="space-y-16">
          <li v-for="(article, id) in articles" :key="id">
            <ArticleCard :article="article" />
          </li>
        </ul>
        <div class="flex items-center justify-center mt-6 text-sm">
          <!-- <UButton label="All Articles &rarr;" to="/articles" variant="link" color="gray" /> -->
        </div>
      </div>
  </div>
</template>
