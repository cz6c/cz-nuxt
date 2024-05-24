<script setup lang="ts">
const color = useColorMode()
const meSrc = computed(() => color.value === 'dark' ? '/me-dark.webp' : '/me-light.webp')
</script>

<template>
  <div class="text-sm">
    <div class="fixed top-0 w-full h-12 z-50 header">
      <LayoutsNavbar />
    </div>
    <div class="fixed bottom-20% right--8 transform transform-rotate--20">
      <img :src="meSrc" alt="me" class="w-27 h-45">
    </div>
    <main class="mx-auto max-w-6xl xl:px-8 lg:px-8 md:px-4 sm:px-4 px4">
      <main class="py-16">
        <slot />
      </main>
      <div class="text-center opacity-25">
        [Default Layout]
      </div>
      <LayoutsFooter />
    </main>
  </div>
</template>

<style>
.header {
  background-image: radial-gradient(transparent 1px, #fff 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  border-bottom: 1px solid #dcdfe6;
}

.dark .header {
  background-image: radial-gradient(transparent 1px, #141414 1px);
  border-color: #4c4d4f;
}
</style>
