<script setup lang='ts'>
const {
  public: { title },
} = useRuntimeConfig()
const description = '我在网上发现了很棒的东西'
useSeoMeta({
  title: `书签 - ${title}`,
  description,
})

const bookmarks = [
  {
    id: 1,
    label: 'The Intuitive Vue Framework',
    url: 'https://nuxt.com',
  },
  {
    id: 2,
    label: 'diy头像生成',
    url: 'https://www.dicebear.com/',
  },
  {
    id: 3,
    label: 'CSS渐变生成',
    url: 'https://www.joshwcomeau.com/gradient-generator/',
  },
  {
    id: 4,
    label: 'css-box-shadow-examples',
    url: 'https://getcssscan.com/css-box-shadow-examples',
  },
  {
    id: 5,
    label: 'css-3d-buttons',
    url: 'https://csspro.com/css-3d-buttons',
  },
  {
    id: 6,
    label: 'Animate elements as they scroll into view',
    url: 'https://scrollrevealjs.org',
  },
  {
    id: 7,
    label: 'A lightweight JavaScript library for creating particles',
    url: 'https://vincentgarreau.com/particles.js/',
  },
]

function getHost(url: string) {
  const parsedUrl = new URL(url)
  let host = parsedUrl.host
  if (host.startsWith('www.'))
    host = host.substring(4)

  return host
}

function getThumbnail(url: string) {
  const host = getHost(url)
  return `https://logo.clearbit.com/${host}`
}
</script>

<template>
  <div>
    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
        <a
          :href="bookmark.url"
          target="_blank"
          class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
        >
          <img :src="getThumbnail(bookmark.url)" :alt="bookmark.label" class="w-10 h-10 border-rounded-50%" >
          <p class="truncate" >
            {{ bookmark.label }}
          </p>
          <span class="flex-1" />
          <span class="text-xs font-medium text-gray-400 dark:text-gray-600">
            {{ getHost(bookmark.url) }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>
