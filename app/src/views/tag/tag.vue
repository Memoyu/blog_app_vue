<template>
  <div class="main-container">
    <div class="content">
      <div class="tag-title">标签</div>
      <div class="tag-card">
        <tag-row :tags="tags" size="large"/>
      </div>
      <div class="article-card">
        <article-list></article-list>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs } from "vue";
import ArticleList from "@/views/article/components/article-list.vue";
import TagRow from "@/views/tag/components/tag-row.vue";
import service from "@/api";
import { tag } from "@/api/urls";
import { TagTotalModel } from "@/models";

export default defineComponent({
  name: "Tag",
  components: {
    ArticleList,
    TagRow
  },
  setup() {
    const state = reactive({
      tags: [] as Array<TagTotalModel>,
    });

    onMounted(() => {
      handleLoadTag();
    });

    const handleLoadTag = async (): Promise<void> => {
      const data: Array<TagTotalModel> = await service.get(tag.all, {});
      state.tags = data;
    };

    return {
      ...toRefs(state)
    }
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

