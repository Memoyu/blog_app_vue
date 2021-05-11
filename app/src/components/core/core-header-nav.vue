<template>
  <header>
    <div class="header">
      <div class="menu">
        <div class="content-center">
          <div class="title-container content-center" @click="showAboutMe">
            <img class="logo" src="@/assets/icons/logo.png" alt />
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
            @click="goRouter(item.url)"
          >
            <a>{{ item.name }}</a>
          </li>
        </div>
        <div class="x-c">
          <a-input-search
            class="none-border"
            placeholder="search"
            style="width: 200px"
            @search="onSearch"
          />
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
      { name: "留言", url: "/message", icon: "md-chatboxes" },
      { name: "关于我", url: "/about", icon: "md-beer" },
    ];
    return { nav };
  },
  methods: {
    goRouter(item) {
      // 当有选择标签或者分类时点击博客自动选择
      this.$router.push({ path: item });
    },
    showAboutMe() { 
      console.log("shouwAboutMe")
    }
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  min-height: 70px;
  color: #000;
  position: relative;
  width: 100%;
  margin-top: 20px;
  .menu {
    background: #fff;
    position: relative;
    width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    .title-container {
      margin-right: 70px;
      //min-width: 170px;
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
      font-size: 19px;
      display: flex;
      flex-direction: column;
      font-weight: bold;
      text-align: end;
      .subtitle {
        font-weight: normal;
        margin: -4px;
        font-size: 12px;
      }
    }
    li {
      list-style: none;
      padding: 1px 15px;
      margin: 0 7px;
      &.active {
        background: rgba(0, 0, 0, 0.07);
        border-radius: 3px;
      }
      &:hover {
        background: rgba(0, 0, 0, 0.07);
        border-radius: 3px;
      }
      a {
        font-size: 16px;
        color: #000;
      }
    }
  }
}
</style>
