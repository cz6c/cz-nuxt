<script setup lang="ts">
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
</script>

<template>
  <div>
    <!-- 在组件树中协调对异步依赖的处理（等待下层的多个嵌套异步组件加载完成，并可以在等待时渲染一个加载状态 https://cn.vuejs.org/guide/built-ins/suspense） -->
    <Suspense>
      <!-- 只在客户端渲染（处理激活不匹配 https://cn.vuejs.org/guide/scaling-up/ssr.html#hydration-mismatch） -->
      <ClientOnly>
        <PageView />
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
