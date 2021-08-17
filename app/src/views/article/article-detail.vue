<template>
  <div>
    <img
      class="article-detail-header"
      src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb"
    />
    <div class="header-menu x-c">
      <div class="header-content y-f">
        <span class="title">{{ articleDetail.title }}</span>
        <div class="meta">
          <span>
            <icon icon="UserOutlined" />
            作者
            {{ articleDetail.user.name }}
          </span>
          <span class="item">
            <icon icon="ClockCircleOutlined" />
            发表于
            {{ articleDetail.createTime }}
          </span>
          <span class="item">
            <icon icon="EyeOutlined" />
            阅读次数
            {{ articleDetail.hits }}
          </span>
          <span class="item">
            <icon icon="MessageOutlined" />
            评论次数
            {{ articleDetail.comments }}
          </span>
        </div>
        <div class="tags">
          <a-tag
            color="#2db7f5"
            v-for="tag in articleDetail.tags"
            :key="tag.id"
          >
            {{ tag.name }}
          </a-tag>
        </div>
      </div>
    </div>
    <div class="main-container warp">
      <a-row :gutter="24">
        <a-col :xl="18" :lg="18" :md="24" :sm="24" :xs="24">
          <a-card class="preview">
            <div
              id="article"
              class="article"
              @click="HandlePreview($event)"
            ></div>
          </a-card>
        </a-col>
        <a-col :xl="6" :lg="6" :md="24" :sm="24" :xs="24" class="sidebar-user">
          <a-card
            class="aside-list"
            shadow="never"
            :body-style="{ padding: '12px' }"
            :style="aside > 300 ? 'position: fixed;top:30px;width:260px;' : ''"
          >
            <div>
              <span class="catalog">目录</span>
            </div>
            <div id="navigation" class="wx_navigation" />
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  watch,
  reactive,
  toRefs,
  nextTick,
} from "vue";
import { Icon } from "@/icon";
import { useRoute } from "vue-router";
import Vditor from "vditor";
import service from "@/api";
import { ArticleDetailModel } from "@/models";
import { article } from "@/api/urls";
declare let document: Document | any;

export default defineComponent({
  name: "ArticleDetail",
  components: { Icon },
  setup() {
    const route = useRoute();
    const state = reactive({
      id: "0",
      articleDetail: {
        user: {},
      } as ArticleDetailModel,
      aside: 0,
      scroll: 0,
      heightArr: [] as number[],
      nodes: [] as HTMLElement[],
    });
    onMounted(async () => {
      state.id = route.params.id as string;
      GetArticleDetail();
      await nextTick(() => {
        window.addEventListener("scroll", DataScroll, true);
      });
    });

    watch(
      () => state.scroll,
      () => {
        LoadSroll();
      }
    );

    const GetArticleDetail = async (): Promise<void> => {
      const data: ArticleDetailModel = await service.get(
        `${article.detail}${state.id}`,
        {}
      );
      state.articleDetail = data;
      Render(data.articleContent.markdown);
    };

    const Render = (markdown: string) => {
      Vditor.preview(document.getElementById("article"), markdown, {
        markdown: {
          toc: true,
          theme: "light",
        },
        hljs: {
          enable: true,
          style: "tango",
          lineNumber: true,
        },
        speech: {
          enable: true,
        },
        anchor: 2,
        async after() {
          await Init();
          if (window.innerWidth <= 768) {
            return;
          }
        },
        lazyLoadImage:
          "https://cdn.jsdelivr.net/npm/vditor/dist/images/img-loading.svg",
      });
    };
    const Init = async (): Promise<void> => {
      await nextTick(() => {
        BuildNavigation();
        document
          .getElementById("article")
          .querySelectorAll("h1,h2,h3,h4,h5")
          .forEach((item: HTMLElement) => {
            state.heightArr.push(item.offsetTop - 30);
          });
        state.nodes = document
          .getElementById("navigation")
          .getElementsByClassName("navigator-item");
      });
    };

    const BuildNavigation = () => {
      let navigation = document.getElementById("navigation");
      const nodes = document
        .getElementById("article")
        .querySelectorAll("h1,h2,h3,h4,h5");
      let newDoms: any[] = [];
      if (nodes.length) {
        for (let i = 0; i < nodes.length; i++) {
          const id = nodes[i].id;
          let navigationChildren = judageH(nodes[i], i, id);
          navigation.appendChild(navigationChildren);
        }
      }
      function judageH(node: any, i: number, domId: any) {
        let articleId = state.id;
        const reg = /^H[1-5]{1}$/;
        if (reg.exec(node.tagName)) {
          let cloneNode = node.cloneNode();

          cloneNode.classList.add("navigator-item");
          const a = document.createElement("a");

          a.id = domId;
          a.setAttribute("articleId", articleId);
          a.setAttribute("href", `#/article/${articleId}#${cloneNode.id}`);

          a.innerHTML = node.innerText;
          cloneNode.appendChild(a);
          newDoms.push(cloneNode);

          return cloneNode;
        }
        return "";
      }
      const sliceDoms: any[] = []; // 归类好的节点树

      newDoms.forEach((dom, i) => {
        // 把标题归类 每部分的标题组合到一起
        const level = dom.tagName.substr(1);
        const upLevel = newDoms[i - 1] ? newDoms[i - 1].tagName.substr(1) : "";

        if (upLevel) {
          if (level > upLevel) {
            sliceDoms[sliceDoms.length - 1].push(dom);
          } else if (
            level > sliceDoms[sliceDoms.length - 1][0].tagName.substr(1)
          ) {
            sliceDoms[sliceDoms.length - 1].push(dom);
          } else {
            sliceDoms.push([dom]);
          }
        } else {
          sliceDoms.push([dom]);
        }
      });
      sliceDoms.forEach((doms) => {
        const thisTitleMaxId = doms[0].tagName.substr(1);
        doms.forEach((dom: any) => {
          const domHeadingLevel = dom.tagName.substr(1) - thisTitleMaxId + 1;
          dom.classList.add("heading_" + domHeadingLevel);
        });
      });
    };

    const HandlePreview = (event: MouseEvent) => {
      var target = event.target as HTMLElement;
      if (target) {
        if (target.nodeName == "IMG") {
          console.log("IMG");
        }
      }
    };

    const DataScroll = () => {
      state.scroll =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        document.querySelector("#article").scrollTop;

      state.aside =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        document.querySelector(".aside-list").scrollTop;
    };

    const LoadSroll = () => {
      for (let i = 0; i < state.heightArr.length - 1; i++) {
        if (state.nodes[i] && state.nodes[i].classList != undefined) {
          if (
            state.scroll >= state.heightArr[i] &&
            state.scroll <= state.heightArr[i + 1]
          ) {
            state.nodes[i].classList.add("active");
          } else {
            state.nodes[i].classList.remove("active");
          }
        }
      }
    };

    return {
      ...toRefs(state),
      HandlePreview,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "~vditor/dist/index.css";
.article-detail-header {
  z-index: -99;
  top: 0;
  display: block;
  position: absolute;
  height: 50%;
  width: 100%;
}
.header-menu {
  height: 300px;
  .header-content {
    .title {
      text-align: center;
      color: white;
      font-size: 30px;
      font-weight: bold;
    }
    .meta {
      color: white;
      font-size: 15px;
      .item {
        margin-left: 20px;
      }
    }
    .tags {
      margin: 10px 0;
      .ant-tag {
        font-size: 15px;
        font-weight: bold;
      }
    }
  }
}

.preview {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
}
.vditor-reset {
  font-family: "CascadiaCode" !important;
}
#article /deep/ {
  color: #24292e;
  padding: 0px 12px 20px 12px !important;
  ul li,
  a,
  p {
    line-height: 1.6;
    font-size: 15px !important;
  }
  img {
    max-width: 100%;
    width: auto !important;
    height: auto !important;
    &:hover {
      cursor: zoom-in;
    }
  }
  .code-pre {
    color: #333;
    border-radius: 2px;
    .hljs-keyword {
      color: #00f;
    }
    .hljs-title,
    .hljs-params,
    .hljs-function {
      color: #333;
    }
    .hljs-number {
      color: #361da3;
    }
    .hljs-meta {
      color: #2b91af;
    }
    .hljs-string {
      color: #a31515;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #333;
    line-height: 1.25;
    margin-top: 24px;
    margin-bottom: 16px;
    padding-bottom: 5px;
    font-weight: bold;
  }
  strong {
    font-weight: 600;
  }
  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre {
    margin-top: 0;
    margin-bottom: 16px;
  }
  h1 {
    font-size: 30px;
    margin-bottom: 5px;
  }
  h2 {
    margin-top: 20px;
    border-bottom: 1px solid #eaecef;
  }
  h3 {
    margin-top: 10px;
  }
  h4,
  h5,
  h6 {
    margin-top: 5px;
  }

  ul li:after {
    width: 4px;
    height: 4px;
  }

  ul li input[type="checkbox"]:before {
    z-index: 199 !important;
  }

  blockquote p {
    margin-bottom: 0px;
  }
  a {
    color: #4285f4;
    &:hover {
      text-decoration: underline;
    }
  }
  .preview-img .close {
    right: 22px;
  }
}

.sidebar-user /deep/ {
  width: 100%;
  a:hover {
    text-decoration: underline;
  }
  .clearfix {
    padding: 18px 20px;
    font-size: 17px;
    .catalog {
      font-size: 19px;
      font-weight: bold;
    }
  }
}

.wx_navigation {
  position: relative;
  max-height: 700px;
  overflow: auto;
}

.wx_navigation /deep/ .navigator-item,
.wx_navigation /deep/ .navigator-item-title {
  cursor: pointer;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  color: #333;
  white-space: nowrap;
  padding: 4px 0 4px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  position: relative;
}

.wx_navigation /deep/ {
  .navigator-item > a {
    // padding-left: 10px;
    position: relative;
    padding: 4px 0 4px 12px;
    white-space: nowrap;
  }

  .navigator-item.heading_1 > a {
    font-weight: 600;
    color: #000;
  }

  .navigator-item.heading_2 {
    padding-left: 20px;
  }

  .navigator-item.heading_3 {
    padding-left: 30px;
  }

  .navigator-item.heading_4 {
    padding-left: 40px;
  }

  .navigator-item.heading_5 {
    padding-left: 50px;
  }

  .navigator-item.heading_6 {
    padding-left: 60px;
  }
}
.wx_navigation /deep/ .navigator-item {
  border-left: 4px solid transparent;
  &.active {
    color: #007fff;
    border-left: 4px solid #1bc3fb;
    background: rgba(27, 195, 251, 0.1);
  }
  &:hover {
    border-left: 4px solid #1bc3fb;
    background: rgba(27, 195, 251, 0.1);
  }
}

.wx_navigation > .navigator-item > a::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -2px;
  width: 4px;
  height: 4px;
  background-color: currentColor;
  border-radius: 50%;
}
.wx_navigation > .navigator-item.heading_1 > a::before {
  margin-top: -3px;
  width: 6px;
  height: 6px;
}

@media (max-width: 960px) {
  .aside-list {
    display: none;
  }
}
</style>
