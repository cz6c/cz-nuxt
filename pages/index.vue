<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core'
import type { ArticleType } from '#types/index'
// import { listMedia } from '@/api/index'

definePageMeta({
  layout: 'home',
})

const {
  public: { title },
} = useRuntimeConfig()
useSeoMeta({
  title,
  description: 'This personal website integrates life essays and front-end technology sharing, aiming to create a diversified personal online space that not only showcases personal life interests, but also provides valuable professional content for visitors who pay attention to front-end technology',
  // description:
  //   "cz6，是一名前端工程师，来自湖南。专门从事构建web应用程序和网站，使用Javascript、React、Vue、Node。在这里会分享我的实践、项目，以及思考（主要是关于技术和设计）。",
  // ogImage: "/avatar.png",
})

// 请求服务端接口
// async function contactForm() {
//   const { data, code, msg } = await listMedia({ hello: 'world ' })
//   console.log('🚀 ~ contactForm ~ data, code, msg:', data, code, msg)
// }

// 请求项目接口
// const { data } = await useFetch('/api/pageview')

// 获取content下的富文本
const { data: articles } = await useAsyncData('articles-home', async () => {
  const data = await queryContent('/articles').sort({ published: -1 }).limit(5).only(['title', 'description', 'published', '_path']).find()
  return data.map(article => ({
    ...article,
    published: new Date(article.published).getTime() > new Date().getTime() - 3600000 * 24 * 7 ? formatTimeAgo(new Date(article.published)) : article.published,
  }))
})
</script>

<template>
  <div>
    <!-- 在组件树中协调对异步依赖的处理（等待下层的多个嵌套异步组件加载完成，并可以在等待时渲染一个加载状态 https://cn.vuejs.org/guide/built-ins/suspense） -->
    <Suspense>
      <!-- 只在客户端渲染（处理激活不匹配 https://cn.vuejs.org/guide/scaling-up/ssr.html#hydration-mismatch） -->
      <ClientOnly>
        <div>
          <!-- <div text-gray:80 @click="contactForm">
              <span text-gray>{{ data }}</span>
            </div> -->
          <h2 class="uppercase text-xl font-semibold my-6">
            最近的文章
          </h2>
          <ul class="space-y-16">
            <li v-for="(article, id) in articles" :key="id">
              <ArticleCard :article="article as unknown as ArticleType" />
            </li>
          </ul>
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
