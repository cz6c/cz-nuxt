<template>
  <div>
    <div class="h-12">
      <LayoutsNavbar />
    </div>
    <main class="mx-auto max-w-6xl py-16 xl:px-8 lg:px-8 md:px-4 sm:px-4 px4">
      <slot />
      <Footer />
      <div class="mx-auto mt-5 text-center text-sm opacity-25">
        [Default Layout]
      </div>
    </main>
  </div>
</template>
