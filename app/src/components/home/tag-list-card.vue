<template>
  <div class="tag-comp card-border-radius">
    <div class="tag-title">标签</div>
    <div class="x-start tags-container">
      <tag-list-item v-for="tag in tags" :key="tag.id" :tag="tag" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TagListItem from "./tag-list-item.vue";

export default defineComponent({
  components: {
    TagListItem,
  },
  props: {
    tags: {
      type: Array,
      default: () => [
        { name: "随笔", total: 10 },
        { name: ".NET Core", total: 20 },
        { name: "C#", total: 30 },
        { name: "阿里云", total: 50 },
        { name: "任务调度", total: 60 },
        { name: "Kafka", total: 70 },
        { name: "Linux", total: 80 },
        { name: "Docker", total: 90 },
        { name: "微服务", total: 100 },
      ],
    },
  },
});
</script>

<style lang="scss" scoped>
.tag-comp {
  background: #fff;
  padding: 25px 15px;
  margin-bottom: 20px;
  .tag-title {
    text-align: center;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .tags-container{
    flex-wrap: wrap;
  }
}
</style>