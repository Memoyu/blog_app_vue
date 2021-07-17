<template>
  <div class="category-comp card-border-radius">
    <li v-for="category in categories" :key="category.id">
      <category-list-item :category="category" />
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent ,PropType } from "vue";
import CategoryListItem from "./category-list-item.vue";
import { CategoryTotalModel } from "@/types";

export default defineComponent({
  components: {
    CategoryListItem,
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
.category-comp {
  background: #fff;
  padding: 25px;
  margin-bottom: 20px;
  .category-item {
    height: 40px;
    text-align: center;
    margin: 9px;
    background: rgb(202, 187, 187);
  }
  li {
    list-style: none;
    &:hover {
      background: rgba(0, 0, 0, 0.07);
      border-radius: 3px;
    }
  }
}
</style>