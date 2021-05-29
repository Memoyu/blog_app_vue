<template>
  <div class="main-container">
    <a-row type="flex" :gutter="10">
      <!-- 左 -->
      <a-col class="left" flex="20%">
        <intro-card></intro-card>
      </a-col>
      <!-- 中 -->
      <a-col class="middle" flex="60%">
        <article-list-card></article-list-card>
      </a-col>
      <!-- 右 -->
      <a-col class="right" flex="20%">
        <category-list-card></category-list-card>
        <tag-list-card></tag-list-card>
        <info-card></info-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated } from "vue";
import IntroCard from "@/components/home/intro-card.vue";
import ArticleListCard from "@/components/home/article-list-card.vue";
import InfoCard from "@/components/home/info-card.vue";
import CategoryListCard from "@/components/home/category-list-card.vue";
import TagListCard from "@/components/home/tag-list-card.vue";

export default defineComponent({
  name: "Home",
  components: {
    IntroCard,
    ArticleListCard,
    InfoCard,
    CategoryListCard,
    TagListCard,
  },
  setup() {
    console.log("home setup")
  }
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

