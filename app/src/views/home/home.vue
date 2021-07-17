<template>
  <div class="main-container">
    <a-row class="row-bg" :gutter="20">
      <a-col :xs="24" :md="17">
        <article-list :articles="articleItems" />
      </a-col>

      <a-col :xs="24" :md="7">
        <div>
          <div class="right-card-title">分类</div>
          <category-list></category-list>
        </div>
        <div>
          <div class="right-card-title">标签</div>
          <tag-list></tag-list>
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
import { defineComponent, reactive, onMounted, toRefs } from "vue";
import ArticleList from "@/components/article/article-list.vue";
import InfoCard from "@/components/home/info-card.vue";
import CategoryList from "@/components/category/category-list.vue";
import TagList from "@/components/tag/tag-list.vue";
import service from "@/api";
import { article } from "@/api/urls";
import { ArticlePageModel, ArticleItemModel } from "@/types";

export default defineComponent({
  name: "Home",
  components: {
    ArticleList,
    InfoCard,
    CategoryList,
    TagList,
  },
  setup() {
    const state = reactive({
      articleItems: [] as Array<ArticleItemModel>,
      params: {
        title: "",
        author: "",
        isTop: "",
        category: 0,
        createTimeStart: "",
        createTimeEnd: "",
        page: 1,
        size: 10,
        sort: "",
      },
    });

    onMounted(() => {
      handleLoadArticle();
    });

    const handleLoadArticle = async (): Promise<void> => {
      const data: ArticlePageModel = await service.get(article.pages, {
        params: state.params,
      });
      state.articleItems = [...state.articleItems, ...data.items];
    };

    return {
      ...toRefs(state),
      handleLoadArticle,
    };
  },
});
</script>

<style lang="scss">
.right-card-title {
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 3px solid #ec7259;
}
</style>

