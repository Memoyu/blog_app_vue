<template>
  <div class="main-container">
    <div class="content">
      <div class="category-title">分类</div>
      <div class="category-card">
        <category-row  :categories="categories"/>
      </div>
      <div class="article-card">
        <article-list></article-list>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs } from "vue";
import CategoryList from "@/components/category/category-list.vue";
import CategoryRow from "@/components/category/category-row.vue";
import ArticleList from "@/components/article/article-list.vue";
import service from "@/api";
import { article, category } from "@/api/urls";
import { CategoryTotalModel } from "@/models";

export default defineComponent({
  name: "Category",
  components: {
   // CategoryList,
    ArticleList,
    CategoryRow
  },
  setup() {
    const state = reactive({
      categories: [] as Array<CategoryTotalModel>,
    });

    onMounted(() => {
      handleLoadCategory();
    });

    const handleLoadCategory = async (): Promise<void> => {
      const data: Array<CategoryTotalModel> = await service.get(
        category.all,
        {}
      );
      state.categories = data;
    };
    return {
      ...toRefs(state)
    }
  },
});
</script>

<style lang="scss">
.category-title {
   font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 0 0 0 15px;
  border-left: 5px solid #ec7259;
}
.category-card {
  margin-bottom: 30px;
}
.article-card {
}
</style>

