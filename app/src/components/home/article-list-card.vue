<template>
  <div class="articles-comp">
    <div v-for="a in articles" :key="a.id" class="articles-item">
       这是文章 {{a}}*********
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
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
.articles-item {
    background: cornsilk;
    text-align: center;
    height: 100px;
    margin: 15px;
}
</style>