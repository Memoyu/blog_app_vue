<template>
  <div class="category-comp card-border-radius">
    <div class="category-title">分类</div>
    <div v-for="a in categories" :key="a.id" class="category-item">
      这是分类 {{ a }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    categories: {
      type: Array,
      default: () => [10, 20, 30, 50, 60, 70, 80, 90, 100],
    },
  },
});
</script>

<style lang="scss" scoped>
.category-comp {
  background: #fff;
  padding: 10px 0 10px 0;
  margin-bottom: 20px ;
  .category-title {
    text-align: center;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .category-item {
    height: 40px;
    text-align: center;
    margin: 9px;
    background: rgb(202, 187, 187);
  }
}
</style>