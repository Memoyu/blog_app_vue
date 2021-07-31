<template>
  <a-card
    class="info-box"
    hoverable
    shadow="hover"
    :body-style="{
      width: ' 100%',
      'background-color': '#fff',
      border: '1px solid #f1f1f1',
      transition: 'border-color .3s',
    }"
  >
    <div class="tag">
      <div>
        <div
          class="thumb"
          :style="`background-image:url(${thumbnail_display_url})`"
        ></div>
        <div class="title">{{ tag.name }}</div>
      </div>
      <div class="bottom clearfix" style="margin-top: 10px">
        <div class="meta-box">
          <time class="meta">{{ tag.total }} 文章</time>
          <span class="meta-hidden">
            •
            <time class="meta">{{ view_hits }} 浏览</time>
          </span>
        </div>
      </div>
    </div>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TagTotalModel } from "@/models";

export default defineComponent({
  components: {},
  props: {
    tag: {
      type: Object as PropType<TagTotalModel>,
      default: () => {
        return {};
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.info-box {
  margin-bottom: 20px;
  border-radius: 8px;
  .tag {
    width: 100%;
    text-align: center;
    .image {
      .image-slot .el-icon-picture-outline {
        font-size: 2rem;
      }
    }
    .title {
        font-size: 20px;
        line-height: 25px;
        color: #333;
      }

    .meta-box {
      justify-content: center;
      align-items: center;
      font-size: 0.85rem;
      color: #909090;

      .meta {
        line-height: 2rem;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
      }

      .article {
        margin-left: 0.8rem;
      }
    }
    /deep/.el-button--small {
      .iconfont {
        font-size: 12px;
        margin-right: 3px;
      }
    }
    .thumb {
      background-size: contain;
      width: 100%;
      height: 32px;
      margin: 1rem auto;
      background-color: #fff;
      background-position: 50%;
      background-repeat: no-repeat;
      position: relative;
    }
    .thumb::before {
      opacity: 0;
      pointer-events: none;
    }
  }
}
</style>