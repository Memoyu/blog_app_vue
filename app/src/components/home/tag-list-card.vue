<template>
  <div class="tag-comp card-border-radius">
    <div class="tag-title">标签</div>
    <div v-for="a in tags" :key="a.id" class="tag-item">这是标签 {{ a }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    tags: {
      type: Array,
      default: () => [10, 20, 30, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
    },
  },
});
</script>

<style lang="scss" scoped>
.tag-comp {
  background: #fff;
  padding: 10px 0 10px 0;
  margin-bottom: 20px;
  .tag-title {
    text-align: center;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .tag-item {
      height: 40px;
    text-align: center;
    margin: 9px;
    background: rgb(202, 187, 187);
  }
}
</style>