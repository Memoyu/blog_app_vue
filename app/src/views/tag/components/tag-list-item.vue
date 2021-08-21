<template>
  <div class="tag-item-comp">
    <div class="tag-container">
      <a class="x-start link-none-line" :href="`#/tag/${tag.id}`">
        <span :class="['tag', size, 'tag-name']">{{ tag.name }}</span>
        <span :class="['tag', size, 'tag-total']">{{ tag.total }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from "vue";

export default defineComponent({
  props: {
    tag: {
      type: Object as PropType<any>,
      default: () => {
        return {};
      },
    },
    size: {
      type: String,
      default: "small",
    },
  },
  setup(props) {
    const dataMap = reactive({
      size: props.size == "small" ? "tag-small" : "tag-large",
    });
    return { ...toRefs(dataMap) };
  },
});
</script>

<style lang="scss" scoped>
.tag-item-comp {
  .tag-container {
    .tag {
      align-items: center;
      background-color: #f5f5f5;
      border-radius: 4px;
      color: #4a4a4a;
      display: inline-flex;
      justify-content: center;
      white-space: nowrap;
    }

    .tag-large {
      font-size: 16px;
      height: 30px;
      line-height: 2.5;
       padding-left: 14px;
      padding-right: 14px;
    }

    .tag-small {
      font-size: 13px;
      height: 25px;
      line-height: 1.5;
      padding-left: 9px;
      padding-right: 9px;
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