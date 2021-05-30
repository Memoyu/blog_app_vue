<template>
  <div class="info-comp card-border-radius">
    <div class="info-container">
      <div v-for="info in infos" :key="info.id" class="x-bc info-content">
        <span class="title">{{info.name}}:</span>
        <span class="info-total">{{info.total}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    infos: {
      type: Array,
      default: () => [
        { name: "文章总数", total: "10篇" },
        { name: "分类总数", total: "20个" },
        { name: "标签总数", total: "30个" },
        { name: "留言总数", total: "50条" },
        { name: "已运行", total: "180天12时29分" },
      ],
    },
  },
});
</script>

<style lang="scss" scoped>
.info-comp {
  background: #fff;
  padding: 25px;
  .title {
    font-size: 14px;
  }
  .info-content{
    margin-bottom: 10px;
  }
  .info-total {
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 4px;
    color: #4a4a4a;
    display: inline-flex;
    font-size: 14px;
    height: 25px;
    justify-content: center;
    line-height: 1.5;
    padding-left: 9px;
    padding-right: 9px;
    white-space: nowrap;
  }
}
</style>