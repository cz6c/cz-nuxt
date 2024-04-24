<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core'
import { listMedia } from '@/api/index'

// 请求服务端接口
async function contactForm() {
  const { data, code, msg } = await listMedia({ hello: 'world ' })
  console.log('🚀 ~ contactForm ~ data, code, msg:', data, code, msg)
}

// 请求项目接口
const { data } = await useFetch('/api/pageview')

// 获取content下的富文本
const { data: articles } = await useAsyncData('articles-home', async () => {
  const data = await queryContent('/articles').sort({ published: -1 }).limit(3).only(['title', 'description', 'published', '_path']).find()
  return data.map(article => ({
    ...article,
    published: new Date(article.published).getTime() > new Date().getTime() - 3600000 * 24 * 7 ? formatTimeAgo(new Date(article.published)) : article.published,
  }))
})
</script>

<template>
  <div>
    <div text-gray:80 @click="contactForm">
      <span text-gray>{{ data }}</span>
    </div>
    <div>
      <h2 class="uppercase text-xl font-semibold mb-6">
        最近的文章
      </h2>
      <ul class="space-y-16">
        <li v-for="(article, id) in articles" :key="id">
          <ArticleCard :article="article" />
        </li>
      </ul>
    </div>
  </div>
</template>
