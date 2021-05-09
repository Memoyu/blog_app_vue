<template>
  <div class="category-comp card-border-radius">
    <div class="category-title">分类</div>
    <a-divider />
    <div class="category-content">
      <a-row :gutter="[16,24]">
        <a-col v-for="item in categories" :key="item.toString()" :span="16 / categories.length">
          <div class="category-item">分类{{item.toString()}}</div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    categories: {
      type: Array,
      default: () => [
        10,
        20,
        30,
        50,
        60,
        70,
        80,
        90,
        100,
        20,
        303,
        5022222,
        6022,
        70111,
        80,
        90,
        100,
        20,
        30,
        50,
        60,
        70,
        80,
        90,
        100,
        20,
        30,
        50,
        60,
        70,
        80,
        90,
        100,
        20,
        30,
        50,
        60,
        70,
        80,
        90,
        100,
      ],
    },
  },
});
</script>

<style lang="scss" scoped>
.category-comp {
  padding: 10px;
  background: white;
  .category-title {
    font-size: 19px;
    font-weight: bold;
    margin: 20px;
  }
  .category-content {
    .category-item {
      height: 50px;
      line-height: 50px;
      background: rgb(202, 187, 187);
    }
  }
}
</style>