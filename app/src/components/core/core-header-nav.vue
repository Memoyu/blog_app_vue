<template>
  <header>
    <div class="header">
      <div class="header-menu menu">
        <div class="content-center">
          <div
            class="title-container content-center"
            @click="handlerControlAboutMe"
          >
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
            @click="handlerGoRouter(item.url)"
          >
            <a>{{ item.name }}</a>
          </li>
        </div>
        <div class="x-c">
          <div v-if="!isLogin" class="default-avatar" @click="handlerLogin">
            <img src="../../assets/images/user/user.png" alt="头像" />
          </div>
          <user-avatar v-else-if="isLogin"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { computed, reactive, toRefs, defineComponent } from "vue";
import { useStore } from "@/store";
import { useRouter } from "vue-router";
import { AppMutationTypes } from "@/store/modules/app/types";
import UserAvatar from "@/components/layout/user-avatar.vue";

export default defineComponent({
  components: { UserAvatar },
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
    const store = useStore();
    const router = useRouter();
    const nav = [
      { name: "首页", url: "/", icon: "ios-book" },
      // { name: "分类", url: "/category", icon: "logo-octocat" },
      // { name: "标签", url: "/tag", icon: "logo-octocat" },
      { name: "友链", url: "/friend", icon: "logo-octocat" },
      // { name: "留言", url: "/message", icon: "md-chatboxes" },
    ];

    const isLogin = computed(() => {
      console.log(store.state.app.isLogin)
      return store.state.app.isLogin;
    });

    const isShowAboutMe = computed(() => {
      return store.state.app.showAboutMe;
    });
    const state = reactive({});

    const handlerGoRouter = async (item: any): Promise<void> => {
      // 当有选择标签或者分类时点击博客自动选择
      router.push({ path: item });
    };
    const handlerControlAboutMe = async (): Promise<void> => {
      store.commit(AppMutationTypes.CONTROL_ABOUT_ME, !isShowAboutMe.value);
    };

    const handlerLogin = async (): Promise<void> => {
      store.commit(AppMutationTypes.CONTROL_LOGIN, true);
    };

    return {
      nav,
      isLogin,
      ...toRefs(state),
      handlerGoRouter,
      handlerControlAboutMe,
      handlerLogin,
    };
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
    .default-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
      img {
        width: 100%;
      }
    }

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
