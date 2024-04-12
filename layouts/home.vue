<script setup lang='ts'>
const color = useColorMode()
const meSrc = computed(() => color.value === 'dark' ? '/me-dark.webp' : '/me-light.webp')
</script>

<template>
  <div>
    <div class="header h-42">
      <LayoutsNavbar />
      <div class="pt-12">
        <img :src="meSrc" alt="me" class="w-18 h-30">
      </div>
    </div>
    <main class="mx-auto max-w-6xl py-16 xl:px-8 lg:px-8 md:px-4 sm:px-4 px4">
      <slot />
      <Footer />
      <div class="mx-auto mt-5 text-center text-sm opacity-25">
        [Home Layout]
      </div>
    </main>
  </div>
</template>

<style>
.header {
  background: linear-gradient(
    0deg,
    hsl(202deg, 71%, 90%),
    hsl(204deg, 67%, 85%)
  );
}
.dark .header {
  background: linear-gradient(
    0deg,
    hsla(200deg, 100%, 85%, 0.1),
    hsla(200deg, 100%, 85%, 0)
  );
}
</style>
