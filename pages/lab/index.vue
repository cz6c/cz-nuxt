<script setup lang='ts'>
const {
  public: { title },
} = useRuntimeConfig();
const description = "做了一些有趣的实验。";
useSeoMeta({
  title: `Lab - ${title}`,
  description,
});
</script>

<template>
  <div class="index" >
    <div class="space-y-24">
      <!-- 获取content/lab下的文件列表 -->
      <ContentList path="/lab" v-slot="{ list }">
        <ContentQuery v-for="item in list" :key="item._path" :path="item._path" find="one" v-slot="{ data }">
          <ContentRenderer>
            <ContentRendererMarkdown :value="data" />
          </ContentRenderer>
        </ContentQuery>
      </ContentList>
    </div>
  </div>
</template>
