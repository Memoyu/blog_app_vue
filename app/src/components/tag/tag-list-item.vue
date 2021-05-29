<template>
  <div class="tag-item-comp">
    <div class="tag-container">
      <a class="x-start link-none-line" href="">
        <span class="tag tag-name">{{ tagInfo.name }}</span>
        <span class="tag tag-total">{{ tagInfo.total }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from "vue";
interface Tag {
  name: string;
  total: number;
}

export default defineComponent({
  props: {
    tag: {
      type: Object as PropType<Tag>,
      default: () => {
        return {};
      },
    },
  },
  setup(props) {
    const dataMap = reactive({
      tagInfo: props.tag,
    });
    return { ...toRefs(dataMap) };
  },
});
</script>

<style lang="scss" scoped>
.tag-item-comp {
  .tag-container {
    margin-bottom: 12px;
    margin-right: 12px;
    .tag {
      align-items: center;
      background-color: #f5f5f5;
      border-radius: 4px;
      color: #4a4a4a;
      display: inline-flex;
      font-size: 13px;
      height: 25px;
      justify-content: center;
      line-height: 1.5;
      padding-left: 9px;
      padding-right: 9px;
      white-space: nowrap;
    }
    .tag-name {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    .tag-total {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      background: #e7e7e7;
    }
  }
}
</style>