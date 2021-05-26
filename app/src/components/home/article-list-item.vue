<template>
  <div class="article-item">
    <div class="article-container">
      <div class="article-title fs20">
        这是标题这是标题这是标题这是标题这是标题
      </div>
      <div class="article-content">
        <div class="left">
          <div class="tags">
            <a-tag color="blue"> blue </a-tag>
            <a-tag color="blue"> blue </a-tag>
            <a-tag color="blue"> blue </a-tag>
          </div>
          <div class="description fs16">
            OpenJ9介绍OpenJ9是一种高性能，可扩展的Java™虚拟机（VM）实现，完全符合Java虚拟机规范。在运行时，VM解释由Java编译器编译的Java字节码。VM充当语言与底层操作系统和硬件之间的翻译器。Java程序需要特定的VM才能在特定的平台（例如Linux®，z/OS®或Windows™
          </div>
        </div>
        <div class="right">
          <div class="image">
            <img
              src="https://img-blog.csdnimg.cn/20200701115554772.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MTQwNzI4,size_16,color_FFFFFF,t_70"
            />
          </div>
        </div>
      </div>
      <div class="article-meta">
        <span class="meta-item">
          <icon icon="UserOutlined" />
          Memoyu
        </span>
        <span class="meta-item">
          <icon icon="ClockCircleOutlined" />
          2021-05-27 00:00:00
        </span>
        <span class="meta-item">
          <icon icon="EyeOutlined" />
          1,333
        </span>
        <span class="meta-item">
          <icon icon="MessageOutlined" />
          300
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@/icon.ts";

export default defineComponent({
  components: { Icon },
  props: {},
});
</script>

<style lang="scss" scoped>
.article-item {
  background: white;
  padding: 15px;
  margin-bottom: 20px;
  .article-container {
    text-align: center;
    height: 150px;

    .article-title {
      font-weight: bold;
      text-align: start;
    }

    .article-content {
      margin-top: 10px;
      display: flex;
      .left {
        width: 75%;
        .tags {
          .ant-tag-blue {
            background: white !important;
          }
          text-align: start;
        }
        .description {
          margin-top: 10px;
          word-break: break-all;
          word-wrap: break-word;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
      .right {
        width: 25%;
        .image {
          overflow: hidden;
          border-radius: 4px;
          height: 75px;
        }
      }
    }
    .article-meta {
      margin-top: 10px;
      text-align: start;
      .meta-item {
        margin-right: 12px;
      }
    }
  }
}
</style>