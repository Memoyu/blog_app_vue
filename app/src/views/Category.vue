<template>
  <div class="main-container">
    <div class="content">
      <category-row-card class="category-card"></category-row-card>
      <article-list-card class="article-card"></article-list-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CategoryRowCard from "@/components/category/category-row-card.vue";
import ArticleListCard from "@/components/home/article-list-card.vue";

export default defineComponent({
  name: "Category",
  components: {
    CategoryRowCard,
    ArticleListCard,
  },
});
</script>

<style lang="scss">
.category-card {
  margin-bottom: 30px;
}
.article-card {
}
</style>

