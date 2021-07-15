<template>
  <div class="article-item-comp">
    <div class="article-container">
      <div class="article-title fs20">
        <a class="link-none-line"> {{article.title}} </a>
      </div>
      <div class="article-content">
        <div class="left">
          <div class="tags">
            <a-tag color="blue" v-for="tag in article.tags" :key="tag.id"> {{tag.name}} </a-tag>
          </div>
          <div class="description fs16">
            {{article.subtitle}}
          </div>
        </div>
        <div class="right">
          <div class="image">
            <a class="link-none-line">
              <img
                :src="article.thumbnailUrl"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="article-meta">
        <span class="meta-item">
          <icon icon="UserOutlined" />
           {{article.author}}
        </span>
        <span class="meta-item">
          <icon icon="ClockCircleOutlined" />
          {{article.createTime}}
        </span>
        <span class="meta-item">
          <icon icon="EyeOutlined" />
          {{article.hits}}
        </span>
        <span class="meta-item">
          <icon icon="MessageOutlined" />
          {{article.comments}}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted } from "vue";
import { Icon } from "@/icon";
import { ArticleItemModel } from "@/types";

export default defineComponent({
  components: { Icon },
  props: {
    article: {
      type: Object as PropType<ArticleItemModel>
    },
  },
  setup(props) {
    // onMounted(() => { });
  }
});
</script>

<style lang="scss" scoped>
.article-item-comp {
  background: white;
  padding: 15px;
  margin-bottom: 30px;
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
          text-align: start;
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