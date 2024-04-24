<script setup lang='ts'>
const {
  public: { title },
} = useRuntimeConfig()
const description = '做了一些有趣的实验。'
useSeoMeta({
  title: `Lab - ${title}`,
  description,
})
</script>

<template>
  <div class="index">
    <Header class="mb-16" title="实验" :description="description" />
    <div class="space-y-24">
      <!-- 获取content/lab下的文件列表 -->
      <ContentList v-slot="{ list }" path="/lab">
        <ContentQuery v-for="item in list" :key="item._path" v-slot="{ data }" :path="item._path" find="one">
          <ContentRenderer>
            <ContentRendererMarkdown :value="data" />
          </ContentRenderer>
        </ContentQuery>
      </ContentList>
    </div>
  </div>
</template>
