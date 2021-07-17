<template>
  <div class="articles-comp">
    <article-list-item v-for="article in articles" :key="article.id" :article="article" />
  </div>
</template>

<script lang="ts">
import ArticleListItem from "./article-list-item.vue";
import { defineComponent, PropType, onMounted } from "vue";
import { ArticleItemModel } from "@/models";

export default defineComponent({
  components: { 
    ArticleListItem 
  },
  props: {
    articles: {
      type: Array as PropType<ArticleItemModel[]>,
      default: () => {
        return []
      }
    },
  }, 
  setup(props) {
     // onMounted(() => { });
  }
});
</script>

<style lang="scss" scoped>
.articles-comp{
  padding: 10px;
}
</style>