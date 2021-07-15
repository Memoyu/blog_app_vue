<template>
  <div class="main-container">
    <div class="content">
      <div class="tag-title">标签</div>
      <tag-list class="tag-card" size="large"></tag-list>
      <article-list class="article-card"></article-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TagList from "@/components/tag/tag-list.vue";
import ArticleList from "@/components/article/article-list.vue";

export default defineComponent({
  name: "Tag",
  components: {
    TagList,
    ArticleList,
  },
});
</script>

<style lang="scss">
.tag-title {
  font-size: 20px;
  font-weight: bold;
  margin-left: 30px;
  margin-bottom: 10px;
}
.tag-card {
  margin-bottom: 30px;
}
.article-card {
}
</style>

