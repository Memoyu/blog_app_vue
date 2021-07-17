<template>
  <div class="info-comp card-border-radius">
    <div class="info-container">
      <div class="info-list">
        <li v-for="info in infos" :key="info.id">
          <div class="x-bc info-content">
            <span class="title">{{ info.name }}:</span>
            <span class="info-total">{{ info.total }}</span>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, reactive, watch } from "vue";
import { ServerInfoModel, BlogInfoModel } from "@/types";

export default defineComponent({
  props: {
    server: {
      type: Object as PropType<ServerInfoModel>,
      default: () => {
        return {};
      },
    },
    blog: {
      type: Object as PropType<BlogInfoModel>,
      default: () => {
        return {};
      },
    },
  },
  setup(props) {
    const state = reactive({
      infos: [
        { name: "文章总数", total: `${props.blog.articleTotal} 篇` },
        { name: "分类总数", total: `${props.blog.categoryTotal} 个` },
        { name: "标签总数", total: `${props.blog.tagTotal} 个` },
        { name: "留言总数", total: `${props.blog.commentTotal} 条` },
        { name: "已运行", total: `${props.server.workingTime}` },
        { name: "环境", total: `${props.server.environmentName}` },
        { name: "OS_架构", total: `${props.server.osArchitecture}` },
        { name: "内存占用", total: `${props.server.memoryFootprint}` },
        { name: "后端框架", total: `${props.server.frameworkDescription}` },
      ] as Array<any>,
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.info-comp {
  background: #fff;
  padding: 25px;

  .info-list {
    li {
      list-style: none;
      &:hover {
        background: rgba(0, 0, 0, 0.07);
        border-radius: 3px;
      }
    }
    .info-content {
      padding: 5px 10px;
      .title {
        font-size: 14px;
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
  }
}
</style>