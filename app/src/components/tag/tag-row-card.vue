<template>
  <div class="tag-comp card-border-radius">
    <div class="tag-title">标签</div>
    <a-divider />
    <div class="tag-content">
      <a-row :gutter="[16,24]">
        <a-col v-for="item in tags" :key="item.toString()" :span="16 / tags.length">
          <div class="tag-item">标签{{item.toString()}}</div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    tags: {
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
.tag-comp {
  padding: 10px;
  background: white;
  .tag-title {
    font-size: 19px;
    font-weight: bold;
    margin: 20px;
  }
  .tag-content {
    .tag-item {
      height: 50px;
      line-height: 50px;
      background: rgb(202, 187, 187);
    }
  }
}
</style>