<template>
  <div class="main-container">
    <div class="content">
      <tag-row-card class="tag-card"></tag-row-card>
      <article-list-card class="article-card"></article-list-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TagRowCard from "@/components/tag/tag-row-card.vue";
import ArticleListCard from "@/components/article/article-list-card.vue";

export default defineComponent({
  name: "Tag",
  components: {
    TagRowCard,
    ArticleListCard,
  },
});
</script>

<style lang="scss">
.tag-card {
  margin-bottom: 30px;
}
.article-card {
}
</style>

