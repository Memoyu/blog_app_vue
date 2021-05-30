<template>
  <div class="main-container">
    <div class="content">
      <div id="article-preview" v-html="articleDetail.content"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { ArticleModel } from "@/model/articleModel";
import markdown from "@/utils/markdown";
import { useRoute } from "vue-router";
import file from "raw-loader!./test-article-content.md";

export default defineComponent({
  name: "ArticleDetail",
  components: {},
  setup(props) {
    const route = useRoute();

    const state = reactive({
      articleReq: {
        id: "",
      },
      articleDetail: {} as ArticleModel,
    });
    onMounted(() => {
      state.articleReq.id = route.query.id as string;
      GetArticleDetail();
    });
    const GetArticleDetail = async (): Promise<void> => {
      let data = file;
      console.log(data);
      const article = markdown.marked(data);
      article.then((res: { content: string }) => {
        state.articleDetail.content = res.content;
      });
    };
    return { ...toRefs(state) };
  },
});
</script>

<style lang="scss">
#article-preview /deep/ {
  
}
</style>
