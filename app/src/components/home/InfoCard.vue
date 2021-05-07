<template>
  <div class="info-comp card-border-radius">
    <div class="info-title">本站信息</div>
    <div class="info-content y-start">
      <span>文章总数:59篇</span>
      <span>分类总数:9个</span>
      <span>标签:8个</span>
      <span>留言总数:104条</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {},
});
</script>

<style lang="scss" scoped>
.info-comp {
  background: #fff;
  padding: 10px 0 10px 0;
  .info-title {
    text-align: center;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .info-content {

  }
}
</style>