<template>
  <div class="main-container">
    <div class="content">
      <div class="category-title">分类</div>
      <tag-list-card class="category-card" size="large"></tag-list-card>
      <article-list-card class="article-card"></article-list-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TagListCard from "@/components/tag/tag-list-card.vue";
import ArticleListCard from "@/components/article/article-list-card.vue";

export default defineComponent({
  name: "Category",
  components: {
    TagListCard,
    ArticleListCard,
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

