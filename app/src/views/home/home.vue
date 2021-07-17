<template>
  <div class="main-container">
    <a-row class="row-bg" :gutter="20">
      <a-col :xs="24" :md="17">
        <article-list :articles="articleItems" />
      </a-col>

      <a-col :xs="24" :md="7">
        <div>
          <div class="right-card-title">分类</div>
          <category-list :categories="categories" />
        </div>
        <div>
          <div class="right-card-title">标签</div>
          <tag-list :tags="tags" />
        </div>
        <div>
          <div class="right-card-title">本站信息</div>
          <site-info-card :infos="infos"/>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs } from "vue";
import ArticleList from "@/components/article/article-list.vue";
import SiteInfoCard from "@/components/home/site-info-card.vue";
import CategoryList from "@/components/category/category-list.vue";
import TagList from "@/components/tag/tag-list.vue";
import service from "@/api";
import { article, category, tag, monitor } from "@/api/urls";
import {
  ArticlePageModel,
  ArticleItemModel,
  CategoryTotalModel,
  TagTotalModel,
  ServerInfoModel,
  BlogInfoModel,
} from "@/types";

export default defineComponent({
  name: "Home",
  components: {
    ArticleList,
    SiteInfoCard,
    CategoryList,
    TagList,
  },
  setup() {
    const state = reactive({
      articleItems: [] as Array<ArticleItemModel>,
      categories: [] as Array<CategoryTotalModel>,
      tags: [] as Array<TagTotalModel>,
      infos: [] as Array<any>,
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
      handleLoadCategory();
      handleLoadTag();
      handleBaseInfo();
    });

    const handleLoadArticle = async (): Promise<void> => {
      const data: ArticlePageModel = await service.get(article.pages, {
        params: state.params,
      });
      state.articleItems = [...state.articleItems, ...data.items];
    };

    const handleLoadCategory = async (): Promise<void> => {
      const data: Array<CategoryTotalModel> = await service.get(
        category.all,
        {}
      );
      state.categories = data;
    };

    const handleLoadTag = async (): Promise<void> => {
      const data: Array<TagTotalModel> = await service.get(tag.all, {});
      state.tags = data;
    };

    const handleBaseInfo = async (): Promise<void> => {
      const server: ServerInfoModel = await service.get(monitor.serverInfo, {});
      const blog: BlogInfoModel = await service.get(monitor.blogInfo, {});
       state.infos = [
          { name: "文章总数 ", total: `${blog.articleTotal} 篇` },
          { name: "分类总数", total: `${blog.categoryTotal} 个` },
          { name: "标签总数", total: `${blog.tagTotal} 个` },
          { name: "留言总数", total: `${blog.commentTotal} 条` },
          { name: "已运行", total: `${server.workingTime}` },
          { name: "环境", total: `${server.environmentName}` },
          { name: "OS_架构", total: `${server.osArchitecture}` },
          { name: "内存占用", total: `${server.memoryFootprint}` },
          { name: "后端框架", total: `${server.frameworkDescription}` },
        ];
    };

    return {
      ...toRefs(state),
      handleLoadArticle,
      handleLoadCategory,
      handleLoadTag,
      handleBaseInfo,
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

