<template>
  <div class="main-container">
    <a-row type="flex" :gutter="30">
      <!-- 左 -->
      <a-col class="left">
        <intro-card></intro-card>
      </a-col>
      <!-- 中 -->
      <a-col class="middle">
        <article-card></article-card>
      </a-col>
      <!-- 右 -->
      <a-col class="right">
        <category-card></category-card>
        <tag-card></tag-card>
        <info-card></info-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import introCard from "@/components/home/IntroCard.vue";
import articleCard from "@/components/home/ArticleCard.vue";
import infoCard from "@/components/home/InfoCard.vue";
import categoryCard from "@/components/home/CategoryCard.vue";
import tagCard from "@/components/home/TagCard.vue";

export default defineComponent({
  name: "Home",
  components: {
    introCard,
    articleCard,
    infoCard,
    categoryCard,
    tagCard,
  },
});
</script>

<style lang="scss">
.ant-row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
// .left {
//   background: green;
// }

// .middle {
//   background: yellow;
// }

// .right {
//   background: blue;
// }
</style>

