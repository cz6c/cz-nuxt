<template>
  <div>
    <h2 class="text-sm font-semibold">{{ title }}</h2>
    <p class="text-gray-500 text-sm">
      {{ description }}
    </p>
    <div class="mt-2 border dark:border-white/10 rounded-lg shadow-sm overflow-hidden">
      <div class="p-2 flex items-center gap-2 border-b dark:border-white/10">
        <div class="flex items-center w-full">
          <button v-for="({ tab }, i) in tabs" :key="i" @click="nowTab = 'preview'"
            class="relative hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300 text-gray-700"
            :class="{ 'active-tab': nowTab === tab }">{{ tab }}</button>
          <!-- <button v-if="showUsageTab" @click="tab = 'usage'"
            class="relative hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300 text-gray-700"
            :class="{ 'active-tab': tab === 'usage' }">Usage</button>
          <button v-if="showCreditTab" @click="tab = 'credit'"
            class="relative hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300 text-gray-700"
            :class="{ 'active-tab': tab === 'credit' }">Credits</button> -->
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

<script setup>
defineProps({
  title: String,
  description: String,
  showUsageTab: {
    type: Boolean,
    default: true,
  },
  showCreditTab: {
    type: Boolean,
    default: false,
  },
});

const tabs = [
  {
    tab: "preview",
  },
  {
    tab: "code",
  },
  {
    tab: "usage",
  },
  {
    tab: "credit",
  }
]

const nowTab = ref("preview");
</script>

<style scoped>
.active-tab {
  @apply after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary-500 after:bottom-[-9px] after:left-0 after:pointer-events-none;
}
</style>
