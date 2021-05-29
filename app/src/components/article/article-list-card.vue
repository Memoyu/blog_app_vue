<template>
  <div class="articles-comp">
    <article-list-item v-for="a in articles" :key="a.id"/>
  </div>
</template>

<script lang="ts">
import ArticleListItem from "./article-list-item.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { 
    ArticleListItem 
  },
  props: {
    articles: {
      type: Array,
      default: () => [10, 20, 30, 50, 60, 70, 80, 90, 100,],
    },
  }, 
});
</script>

<style lang="scss" scoped>
.articles-comp{
  padding: 10px;
}
</style>