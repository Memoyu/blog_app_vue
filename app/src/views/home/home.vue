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
        <div>
          <div class="right-card-title">分类</div>
          <category-list-card></category-list-card>
        </div>
        <div>
          <div class="right-card-title">标签</div>
          <tag-list-card></tag-list-card>
        </div>
        <div>
          <div class="right-card-title">本站信息</div>
          <info-card></info-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import IntroCard from "@/components/home/intro-card.vue";
import ArticleListCard from "@/components/article/article-list-card.vue";
import InfoCard from "@/components/home/info-card.vue";
import CategoryListCard from "@/components/category/category-list-card.vue";
import TagListCard from "@/components/tag/tag-list-card.vue";
import service from "@/api";
import { article } from "@/api/urls";
import { ArticleListItem } from "@/types";

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
    onMounted(() => {
      handleLoadArticle();
    });

    const handleLoadArticle = async (): Promise<void> => {
      const data: ArticleListItem = await service.get(article.pages, {
      });
      console.log(data)
    };
  },
});
</script>

<style lang="scss">
.ant-row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.right-card-title {
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
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

