<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  showUsageTab: boolean
}> ()

const tabs = computed(() => ([
  {
    tab: 'preview',
    show: true,
  },
  {
    tab: 'code',
    show: true,
  },
  {
    tab: 'usage',
    show: props.showUsageTab,
  },
  {
    tab: 'credit',
    show: props.showCreditTab,
  },
]))

const nowTab = ref('preview')
</script>

<template>
  <div>
    <h2 class="text-sm font-semibold">
      {{ title }}
    </h2>
    <p class="text-gray-500 text-sm">
      {{ description }}
    </p>
    <div class="mt-2 border dark:border-white/10 rounded-lg shadow-sm overflow-hidden">
      <div class="flex items-center gap-2 border-b dark:border-white/10">
        <div v-for="({ tab, show }, i) in tabs" :key="i" @click="nowTab = tab">
          <button
            v-if="show"
            class="relative h-10 px-4 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300 text-gray-700"
            :class="{ 'active-tab': nowTab === tab }"
          >
            {{ tab }}
          </button>
        </div>
      </div>
      <div>
        <div v-if="nowTab === 'preview'" class="bg-gray-100 dark:bg-gray-900 overflow-hidden">
          <slot name="preview" />
        </div>
        <slot v-if="nowTab === 'code'" name="codebase" />
        <slot v-if="nowTab === 'usage'" name="usage" />
        <slot v-if="nowTab === 'credit'" name="credit" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.active-tab {
  @apply after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue after:bottom-[0px] after:left-0 after:pointer-events-none;
}
</style>
