<script setup lang="ts">
const items = [
  { name: 'Home', path: '/' },
  // {
  //   name: 'Projects',
  //   path: '/projects',
  // },
  {
    name: 'Articles',
    path: '/articles',
  },
  { name: 'Lab', path: '/lab' },
  {
    name: 'Bookmarks',
    path: '/bookmarks',
  },
]
</script>

<template>
  <nav class="mx-auto max-w-6xl xl:px-8 lg:px-8 md:px-4 sm:px-4 px4 flex items-center">
    <a href="/">
      <img src="/favicon.ico" alt="me" class="w-6 h-6">
    </a>
    <ul class="flex-1 flex items-center ml-6 text-4">
      <li v-for="item in items" :key="item.path" class="p-3 flex items-center justify-center transition">
        <router-link :to="item.path">
          <span :class="`${$route.path === item.path ? 'font-600' : ''}`">{{ item.name }}</span>
        </router-link>
      </li>
      <li class="flex-1" />
      <li class=" p-3 flex items-center justify-center">
        <a href="https://github.com/antfu/vitesse-nuxt3" target="_blank">
          <div class="i-carbon-logo-github w-1.5em h-1.5em" />
        </a>
      </li>
      <li class="p-3 flex items-center justify-center">
        <LayoutsDarkToggle />
      </li>
    </ul>
  </nav>
</template>
