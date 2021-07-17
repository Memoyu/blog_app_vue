<template>
  <div class="category-row-comp card-border-radius">
    <div class="category-row-content">
      <a-row :gutter="[16, 24]">
        <a-col
          v-for="category in categories"
          :key="category.id"
          :span="24 / categories.length"
        >
          <tag-list-item class="category-list-item" size="large" :tag="category"/>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent ,PropType } from "vue";
import TagListItem from "@/components/tag/tag-list-item.vue";
import { CategoryTotalModel } from "@/models";

export default defineComponent({
  components: {
    TagListItem,
  },
  props: {
     categories: {
      type: Array as PropType<CategoryTotalModel[]>,
      default: () => {
        return []
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.category-row-comp {
  padding: 10px;
  background: white;

  .category-row-content {
   .category-list-item {
      margin-left: 12px;
    }
  }
}
</style>