<template>
  <div class="article-item-comp  card-border-radius">
    <div class="article-container">
      <div class="article-content">
        <div class="title-row fs20">
          <a-tooltip placement="topLeft">
            <template v-slot:title>
              {{ article.title }}
            </template>
            <router-link
              target="_blank"
              class="article-detail-title"
              :to="{ path: '/article/' + article.id }"
            >
              {{ article.title }}
            </router-link>
          </a-tooltip>
        </div>

        <div class="article-tags">
          <a-tag color="blue" v-for="tag in article.tags" :key="tag.id">
            {{ tag.name }}
          </a-tag>
        </div>

        <span class="article-subtitle fs14 article-detail-ellpisis3">
          {{ article.subtitle }}
        </span>

        <div class="article-meta">
          <ul class="meta-list">
            <li class="item author clickable">
              <router-link
                :to="{ path: `/user-article/${article.user.id}` }"
                target="_blank"
              >
                <icon icon="UserOutlined" />
                {{ article.user.name }}
              </router-link>
            </li>
            <li class="item">
              <span>
                <icon icon="ClockCircleOutlined" />
                {{ article.createTime }}
              </span>
            </li>
            <li class="item">
              <span>
                <icon icon="EyeOutlined" />
                {{ article.hits }}
              </span>
            </li>
            <li class="item">
              <span>
                <icon icon="MessageOutlined" />
                {{ article.comments }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <router-link target="_blank" :to="{ path: '/article/' + article.id }">
        <img class="article-thumb" :src="article.thumbnailUrl" alt />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted } from "vue";
import { Icon } from "@/icon";
import { ArticleItemModel } from "@/models";

export default defineComponent({
  components: { Icon },
  props: {
    article: {
      type: Object as PropType<ArticleItemModel>,
    },
  },
  setup(props) {
    // onMounted(() => { });
  },
});
</script>

<style lang="scss" scoped>
.article-item-comp {
  background: white;
  padding: 5px 25px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(178, 186, 194, 0.15);
  .article-container {
    display: flex;
    align-items: center;
    width: 100%;
    .article-content {
      flex: 1 1 auto;
      flex-direction: column;
      justify-content: center;
      min-width: 0;
      .article-detail-title {
        cursor: pointer;
        height: 22px;
        font-size: 18px;
        font-weight: 600;
        color: #45526b;
        line-height: 22px;
      }
      .article-detail-title:hover {
        text-decoration: underline;
      }
      .article-detail-ellpisis3 {
        display: -webkit-box;
        overflow: hidden;
        white-space: normal !important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .article-tags {
        margin: 10px 0;
        .ant-tag-blue {
          background: white !important;
        }
      }

      .article-subtitle {
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(140, 152, 174, 1);
        line-height: 22px;
      }

      .article-meta {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 12px;
        line-height: 17px;
        color: #808da3;
        .meta-list {
          display: flex;
          align-items: baseline;
          white-space: nowrap;
          padding-left: 0 !important;
          a {
            color: #808da3;
          }
          .item a:hover {
            color: #007fff;
          }
          .item.author {
            display: flex;
            align-items: baseline;
          }
          .item:not(:last-child)::after {
            content: "";
            color: rgb(178, 186, 194);
            margin: 0px 12px;
          }
        }
      }

      .title-row {
        margin: 0.5rem 0 0.6rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .article-thumb {
      flex: 0 0 auto;
      margin-left: 2rem;
      background-color: #fff;
      cursor: pointer;
      width: 150px;
      height: 100px;
      border-radius: 8px;
      margin-right: 30px;
      object-fit: cover;
    }
  }

  @media (max-width: 600px) {
    .article-thumb {
      display: none;
    }
  }
}
</style>