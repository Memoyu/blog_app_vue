<template>
  <div class="category-item-comp">
    <a class="x-bc link-none-line category-container">
      <span class="category-name">{{ category.name }}</span>
      <span class="category-total">{{ category.total }}</span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, reactive } from "vue";
import { CategoryTotalModel } from "@/types";

export default defineComponent({
  props: {
    category: {
      type: Object as PropType<CategoryTotalModel>,
      default: () => {
        return {};
      },
    },
  },
  setup(props) {
    const state = reactive({
    });
    return { ...toRefs(state) };
  },
});
</script>

<style lang="scss" scoped>
.category-container {
  padding: 5px 10px;
  .category-total {
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 4px;
    color: #4a4a4a;
    display: inline-flex;
    font-size: 13px;
    height: 25px;
    justify-content: center;
    line-height: 1.5;
    padding-left: 9px;
    padding-right: 9px;
    white-space: nowrap;
  }
}
</style>