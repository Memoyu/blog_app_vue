<template>
  <div class="category-comp card-border-radius">
    <div class="category-title">分类</div>
    <li v-for="category in categories" :key="category.id">
      <category-list-item :category="category" />
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CategoryListItem from "./category-list-item.vue";
interface Category {
  name: string;
  total: number;
}

export default defineComponent({
  components: {
    CategoryListItem,
  },
  props: {
    categories: {
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
.category-comp {
  background: #fff;
  padding: 25px;
  margin-bottom: 20px;
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
  li {
    list-style: none;
    &:hover {
      background: rgba(0, 0, 0, 0.07);
      border-radius: 3px;
    }
  }
}
</style>