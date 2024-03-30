<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="书签" :description="description" />
    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
        <a
          :href="bookmark.url"
          target="_blank"
          class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
        >
          <UAvatar :src="getThumbnail(bookmark.url)" :alt="bookmark.label" :ui="{ rounded: 'rounded-md' }" />
          <p class="truncate text-gray-700 dark:text-gray-200">
            {{ bookmark.label }}
          </p>
          <span class="flex-1"></span>
          <span class="text-xs font-medium text-gray-400 dark:text-gray-600">
            {{ getHost(bookmark.url) }}
          </span>
        </a>
      </li>
    </ul>
  </main>
</template>

<script setup>
const {
  public: { title },
} = useRuntimeConfig();
const description = "我在网上发现了很棒的东西";
useSeoMeta({
  title: `书签 - ${title}`,
  description,
});

const bookmarks = [
  {
    id: 1,
    label: "The Intuitive Vue Framework",
    url: "https://nuxt.com",
  },
  {
    id: 2,
    label: "头像生成器",
    url: "https://www.dicebear.com/",
  },
  {
    id: 3,
    label: "CSS渐变生成器",
    url: "https://www.joshwcomeau.com/gradient-generator/",
  },
  {
    id: 4,
    label: "CSS框阴影示例",
    url: "https://getcssscan.com/css-box-shadow-examples",
  },
  {
    id: 5,
    label: "SVG Spinners",
    url: "https://github.com/n3r4zzurr0/svg-spinners",
  },
];

function getHost(url) {
  const parsedUrl = new URL(url);
  let host = parsedUrl.host;
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  return host;
}

function getThumbnail(url) {
  const host = getHost(url);
  return `https://logo.clearbit.com/${host}`;
}
</script>
