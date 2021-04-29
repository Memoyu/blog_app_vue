<template>
  <header>
    <div class="header">
      <div class="menu">
        <div class="content-center">
          <div class="title-container content-center">
            <img class="logo" src="@/assets/icons/logo.png" alt="" />
            <div class="title">
              <span>Memoyu</span>
              <span class="subtitle">知行合一</span>
            </div>
          </div>
          <!-- 菜单 -->
          <li
            v-for="(item, index) in nav"
            :key="index"
            :class="{ active: $route.path == item.url }"
          >
            <a @click="goRouter(item.url)">{{ item.name }}</a>
          </li>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "Loading...",
    },
  },
  setup() {
    const nav = [
      { name: "首页", url: "/", icon: "ios-book" },
      { name: "分类", url: "/category", icon: "logo-octocat" },
      { name: "标签", url: "/tag", icon: "logo-octocat" },
      { name: "友链", url: "/friend", icon: "logo-octocat" },
      { name: "留言", url: "/messageboard", icon: "md-chatboxes" },
      { name: "关于我", url: "/about", icon: "md-beer" },
    ];
    return { nav };
  },
  methods: {
    goRouter(item) {
      // 当有选择标签或者分类时点击博客自动选择
      this.$router.push({ path: item });
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  min-height: 70px;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  color: #000;
  position: relative;
  width: 100%;
  z-index: 10;
  .menu {
    z-index: 20px;
    position: relative;
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    //font-size: 15px;
    padding: 0 20px;
    .title-container {
      min-width: 170px;
      .logo {
        width: 50px;
        height: 50px;
        margin-right: 20px;
      }
      img {
        width: 100%;
      }
    }
    .content-center {
      display: flex;
      align-items: center;
    }
    .title {
      display: flex;
      flex-direction: column;
      font-weight: bold;
      text-align: end;
      .subtitle{
        font-weight: normal;
        margin:-5px -8px;
        font-size: 12px;
        -webkit-transform: scale(0.80);
      }
    }
    a {
      color: #000;
    }
    li {
      list-style: none;
      padding: 1px 15px;
      margin: 0 7px;
      &.active {
        background: rgba(0, 0, 0, 0.05);
        border-radius: 3px;
      }
      &:hover {
        background: rgba(0, 0, 0, 0.05);
        border-radius: 3px;
      }
    }
  }
}
</style>
