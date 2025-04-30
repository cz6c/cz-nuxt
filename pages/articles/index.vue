<script setup lang='ts'>
import type { ArticleType } from '#types/index'

const {
  public: { title },
} = useRuntimeConfig()
const description = '关于编程、用户界面、产品设计等方面的想法。'
useSeoMeta({
  title: `文章 - ${title}`,
  description,
})

const { data: articles } = await useAsyncData('all-articles', async () => {
  const data = await queryContent('/articles').sort({ published: -1 }).find()
  const admin = await queryContent('/articles/admin').sort({ published: -1 }).find()
  const express = await queryContent('/articles/express').sort({ published: -1 }).find()
  const vue = await queryContent('/articles/vue').sort({ published: -1 }).find()

  return [
    {
      title: 'data',
      list: data,
    },
    {
      title: 'admin',
      list: admin,
    },
    {
      title: 'express',
      list: express,
    },
    {
      title: 'vue',
      list: vue,
    },
  ]
})
</script>

<template>
  <div class="index">
    <Header class="mb-16" title="文章" :description="description" />
    <a v-for="(item, id) in articles" :key="id" :href="`#item_${id}`" class="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
      {{ item.title }}
    </a>
    <div v-for="(item, id) in articles" :id="`item_${id}`" :key="id" class="pt-12">
      <div class="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        {{ item.title }}
      </div>
      <ul class="space-y-16">
        <li v-for="(article, i) in item.list" :key="i">
          <ArticleCard :article="article as unknown as ArticleType" />
        </li>
      </ul>
    </div>
  </div>
</template>
