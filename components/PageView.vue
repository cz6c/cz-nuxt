<script setup lang="ts">
import { listMedia } from '@/api/index'

// 请求接口
async function contactForm() {
  const { data, code, msg } = await listMedia({ hello: 'world ' })
  console.log('🚀 ~ contactForm ~ data, code, msg:', data, code, msg)
}

const { data } = await useFetch('/api/pageview')

const time = useTimeAgo(() => data.value?.startAt || 0)
</script>

<template>
  <div text-gray:80 @click="contactForm">
    <span text-gray font-500>{{ data?.pageview }}</span>
    page views since
    <span text-gray>{{ time }}</span>
  </div>
</template>
