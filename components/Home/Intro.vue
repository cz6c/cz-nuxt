<template>
  <div class="space-y-6">
    <UAvatar
      src="/avatar.svg"
      alt="avatar"
      :ui="{ rounded: 'rounded-md' }"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-26 w-26 sm:h-16 sm:w-16"
    />

    <h1
      class="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
    >
      Hello!
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      我叫 cz6，是一名前端工程师，专门从事构建web应用程序和网站
      ，精通Javascript、Typescript、React、Vue、Node。在这里会分享我的实践、项目，以及
      思考（主要是关于技术和设计）。
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      工作日全职开发
      <a href="https://www.toysbear.com" target="_blank" class="underline">
        toysbear
      </a>
      ，到了周末，我将忙于开发一些随机的工具或应用程序。
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "cz6",
  description:
    "cz6，是一名前端工程师，来自湖南。专门从事构建web应用程序和网站，使用Javascript、React、Vue、Node。在这里会分享我的实践、项目，以及思考（主要是关于技术和设计）。",
  ogImage: "/avatar.png",
});
</script>
