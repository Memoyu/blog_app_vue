<template>
  <div class="main-container">
    <div class="content">
      <div class="category-title">分类</div>
      <tag-list class="category-card" size="large"></tag-list>
      <article-list class="article-card"></article-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TagList from "@/components/tag/tag-list.vue";
import ArticleList from "@/components/article/article-list.vue";

export default defineComponent({
  name: "Category",
  components: {
    TagList,
    ArticleList,
  },
});
</script>

<style lang="scss">
.category-title {
  font-size: 20px;
  font-weight: bold;
  margin-left: 30px;
  margin-bottom: 10px;
}
.category-card {
  margin-bottom: 30px;
}
.article-card {
}
</style>

