<template>
  <div class="main-container warp">
    <div class="category-nav card-border-radius">
      <ul class="nav-list">
        <li
          v-for="(item, index) in categories"
          v-bind:key="index"
          :class="{ active: categoryId == item.id }"
          @click="handleCategory(item.id)"
          class="nav-item"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div>
      <a-row class="row-bg" :gutter="20">
        <a-col :xs="24" :md="17">
          <article-list :articles="articleItems" />
          <infinite-loading
            @infinite="handleInfiniteLoad"
            spinner="bubbles"
            :identifier="any"
          >
            <template v-slot:no-more>
              <a-divider>我也是有底线的...</a-divider>
            </template>
          </infinite-loading>
        </a-col>

        <a-col :xs="24" :md="7">
          <!-- <div>
            <div class="right-card-title">分类</div>
            <category-list :categories="categories" />
          </div> -->
          <div>
            <div class="right-card-title">标签</div>
            <tag-list :tags="tags" />
          </div>
          <div>
            <div class="right-card-title">本站信息</div>
            <site-info-card :infos="infos" />
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs } from "vue";
import InfiniteLoading from "vue-infinite-loading";
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
} from "@/models";

export default defineComponent({
  name: "Home",
  components: {
    ArticleList,
    SiteInfoCard,
    // CategoryList,
    TagList,
    InfiniteLoading,
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
        categoryId: 0,
        createTimeStart: "",
        createTimeEnd: "",
        page: 1,
        size: 10,
        sort: "",
      },
      loading: false,
      any: new Date(),
      total: 0,
      categoryId: 0,
    });

    onMounted(() => {
      // handleLoadArticle();
      handleLoadCategory();
      handleLoadTag();
      handleBaseInfo();
    });

    const handleLoadArticle = async (): Promise<ArticlePageModel> => {
      const data: ArticlePageModel = await service.get(article.pages, {
        params: state.params,
      });
      return data;
    };

    const handleLoadCategory = async (): Promise<void> => {
      const data: Array<CategoryTotalModel> = await service.get(
        category.all,
        {}
      );
      let all = {
        id: 0,
        name: '全部'
      } as CategoryTotalModel
      data.unshift(all)
      state.categories = data;
    };

    const handleCategory = async (id: number): Promise<void> => {
      state.categoryId = id;
      state.params.page = 1;
      state.params.categoryId = id;
      var data = await handleLoadArticle();
      state.articleItems = [...data.items];
    };

    const handleBaseInfo = async (): Promise<void> => {
      const server: ServerInfoModel = await service.get(monitor.serverInfo, {});
      const blog: BlogInfoModel = await service.get(monitor.blogInfo, {});
      state.infos = [
        { name: "文章总数", total: `${blog.articleTotal} 篇` },
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

    const handleInfiniteLoad = async ($state: any): Promise<void> => {
      state.loading = true;

      const currentPage = state.params.page;
      var data = await handleLoadArticle();
      var items = [...data.items];

      if (items.length == 0) {
        if (currentPage == 0) {
          state.articleItems = items;
        }
        $state && $state.complete();
      } else {
        if (currentPage == 0) {
          state.articleItems = items;
        } else {
          state.articleItems = state.articleItems.concat(items);
        }
        state.params.page += 1;
        $state && $state.loaded();
      }
      state.loading = false;
    };

    const handleLoadTag = async (): Promise<void> => {
      const data: Array<TagTotalModel> = await service.get(tag.all, {});
      state.tags = data;
    };

    return {
      ...toRefs(state),
      handleLoadArticle,
      handleLoadCategory,
      handleLoadTag,
      handleBaseInfo,
      handleInfiniteLoad,
      handleCategory,
    };
  },
});
</script>

<style lang="scss">
.category-nav {
  overflow-x: auto;
  background: white;
  height: 50px;
  margin-bottom: 20px;
  .nav-list {
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    line-height: 1;
    .nav-item {
      height: 50%;
      align-items: center;
      display: flex;
      flex-shrink: 0;
      color: #71777c;
      padding: 0 0.5rem;
    }

    li {
      list-style: none;
      &:hover {
        background: rgba(0, 0, 0, 0.07);
        cursor: pointer; 
      }
      &.active {
        border-bottom: 2px solid #ec7259;
      }
    }
  }
}

.right-card-title {
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 3px solid #ec7259;
}
.ant-divider-horizontal.ant-divider-with-text-center::before {
  border-top: 1px solid #ec7259 !important;
}
.ant-divider-horizontal.ant-divider-with-text-center::after {
  border-top: 1px solid #ec7259 !important;
}
</style>

