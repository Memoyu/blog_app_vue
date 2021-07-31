<template>
  <div class="main-container">
    <div class="content">
      <div class="tag-card">
        <tag-header :tag="tag" />
      </div>
      <div class="article-card">
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import InfiniteLoading from "vue-infinite-loading";
import { defineComponent, reactive, onMounted, toRefs } from "vue";
import ArticleList from "@/views/article/components/article-list.vue";
import TagHeader from "./components/tag-header.vue";
import service from "@/api";
import { article, tag } from "@/api/urls";
import { TagTotalModel, ArticleItemModel, ArticlePageModel } from "@/models";

export default defineComponent({
  name: "Tag",
  components: {
    ArticleList,
    TagHeader,
    InfiniteLoading,
  },
  setup() {
    const route = useRoute();
    const state = reactive({
      id: "0",
      tag: {} as TagTotalModel,
      articleItems: [] as Array<ArticleItemModel>,
       params: {
        page: 1,
        size: 10,
        sort: "",
      },
      loading: false,
    });

    onMounted(() => {
      state.id = route.params.id as string;
      handleLoadTagDetail();
    });

    const handleLoadTagDetail = async (): Promise<void> => {
      const data: TagTotalModel = await service.get(
        `${tag.detail}${state.id}`,
        {}
      );
      state.tag = data;
    };

      const handleLoadArticle = async (): Promise<ArticlePageModel> => {
      const data: ArticlePageModel = await service.get(`${article.tagPages}${state.id}`, {
        params: state.params,
      });
      return data;
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

    return {
      ...toRefs(state),
      handleInfiniteLoad
    };
  },
});
</script>

<style lang="scss">
.tag-title {
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 0 0 0 15px;
  border-left: 5px solid #ec7259;
}
.tag-card {
  margin-bottom: 30px;
}
.article-card {
}
</style>

