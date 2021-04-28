<template>
    <header>
        <div class="header">
            <img src="" class="footer-bg">
            <div class="menu">
                <div class="left">
                    <div class="logo">
                        <img src="" alt="">
                    </div>
                    <!-- 菜单 -->
                    <li
                        v-for="(item, index) in nav"
                        :key="index"
                        :class="{active: $route.path==item.url}"
                    >
                        <a @click="goRouter(item.url)">{{item.name}}</a>
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
      default: false
    },
    text: {
      type: String,
      default: "Loading..."
    }
  },
  setup() {
    const nav = [
      { name: "文章", url: "/home", icon: "ios-book" },
      { name: "友链", url: "/test", icon: "logo-octocat" },
      { name: "留言", url: "/message", icon: "md-chatboxes" },
      { name: "关于我", url: "/about", icon: "md-beer" }
    ];
    return { nav };
  },
  methods: {
    goRouter(item) {
      // 当有选择标签或者分类时点击博客自动选择
      this.$router.push({ path: item });
    }
  }
});
</script>

<style lang="scss">
.header {
  display: flex;
  min-height: 60px;
  background-image: linear-gradient(
    167deg,
    #294e46,
    #178387 49%,
    rgba(28, 201, 201, 0.91)
  );
  color: #fff;
  position: relative;
  width: 100%;
  z-index: 10;
  .nav {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }
  .logo {
    width: 100px;
    height: 60px;
    margin-right: 20px;
  }
  img {
    width: 100%;
  }
}
.footer-bg {
  position: absolute;
  opacity: 0.25;
  height: 100%;
  width: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
  .footer-bg {
    width: 100%;
  }
  .nav-bg {
    top: 0;
    display: none;
  }
}
.header .menu {
  z-index: 20px;
  position: relative;
  width: 1000px;
  margin: 0 auto;
  display: flex;
  color: #fff;
  justify-content: space-between;
  font-size: 14px;
  padding: 0 20px;
  font-size: 16px;
  div {
    display: flex;
    align-items: center;
  }
  a {
    color: #fff;
  }
  .left {
    li {
      list-style: none;
      padding: 1px 15px;
      margin: 0 2px;
      &.active {
        background: #7c1879;
        border-radius: 3px;
      }
      &:hover {
        background: #7e4c7c;
        border-radius: 3px;
      }
    }
  }
}
</style>
