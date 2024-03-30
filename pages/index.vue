<template>
  <main class="min-h-screen">
    <div class="space-y-24">
      <!-- 个人信息 -->
      <HomeIntro />
      <!-- 文章列表 -->
      <HomeFeaturedArticles />
      <!-- 联系 -->
      <HomeNewsletter />
    </div>
  </main>
</template>

<script setup>
useSeoMeta({
  title: "cz6",
  description:
    "cz6，是一名前端工程师，来自湖南。专门从事构建web应用程序和网站，使用Javascript、React、Vue、Node。在这里会分享我的实践、项目，以及思考（主要是关于技术和设计）。",
  ogImage: "/avatar.png",
});
</script>
