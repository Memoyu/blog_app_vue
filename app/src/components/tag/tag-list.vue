<template>
  <div class="tag-comp card-border-radius">
    <div class="x-start tags-container">
      <tag-list-item
        class="tag-list-item"
        v-for="tag in tags"
        :key="tag.id"
        :tag="tag"
        :size="size"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from "vue";
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
    size: {
      type: String,
      default: "small",
    },
  },
  setup(props) {
    const state = reactive({
      size: props.size,
    });
    return { ...toRefs(state) };
  },
});
</script>

<style lang="scss" scoped>
.tag-comp {
  background: #fff;
  padding: 25px 15px;
  margin-bottom: 20px;
  .tags-container {
    flex-wrap: wrap;
    .tag-list-item {
      margin-bottom: 12px;
      margin-right: 12px;
    }
  }
}
</style>