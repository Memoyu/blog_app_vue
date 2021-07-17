<template>
  <div class="tag-row-comp card-border-radius">
    <div class="tag-row-content">
      <a-row :gutter="[6, 24]">
        <a-col
          v-for="tag in tags"
          :key="tag.id"
          :span="24 / tags.length"
        >
          <tag-list-item class="tag-list-item" size="large" :tag="tag"/>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TagListItem from "./tag-list-item.vue";
import { TagTotalModel } from "@/models";

export default defineComponent({
  components: {
    TagListItem,
  },
  props: {
    tags: {
      type: Array as PropType<TagTotalModel[]>,
      default: () => {
        return [];
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.tag-row-comp {
  padding: 10px;
  background: white;
  .tag-row-content {
    .tag-list-item {
      margin-left: 12px;
    }
  }
}
</style>