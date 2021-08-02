<template>
  <a-drawer
    placement="right"
    :width="320"
    :mask="false"
    :closable="false"
    :visible="isShowAboutMe"
  >
    <div class="y-f about-content">
      <img class="logo" src="@/assets/icons/logo.png" alt />
      <span class="name">Memoyu</span>
      <marquee scrollamount="3">{{ introduction }}</marquee>
      <span> <icon icon="EnvironmentOutlined"></icon>Guangzhou </span>
    </div>
    <div class="about-contact y-f">
      <a-button class="follow-button" type="primary" shape="round"
        >关注我</a-button
      >
      <div class="contact-meta">
        <ul class="meta-list">
          <li class="item author clickable">
            <a href="https://github.com/Memoyu" target="_blank">
              <icon icon="GithubOutlined"></icon>
            </a>
          </li>

          <li class="item author clickable">
            <router-link :to="{ path: `` }" target="_blank">
              <icon icon="QqOutlined"></icon>
            </router-link>
          </li>

          <li class="item author clickable">
            <router-link :to="{ path: `` }" target="_blank">
              <icon icon="MailOutlined"></icon>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="x-ac about-top">
      <a-button type="primary" shape="circle" @click="handlerCloseAboutMe">
        <template #icon>
          <icon style="font-weight: bold" icon="CloseOutlined"></icon>
        </template>
      </a-button>
    </div>
  </a-drawer>
</template>

<script>
import { computed, reactive, ref, toRefs, defineComponent } from "vue";
import { useStore } from "@/store";
import { Icon } from "@/icon.ts";
import { AppMutationTypes } from "@/store/modules/app/types";

export default defineComponent({
  components: { Icon },
  setup() {
    const store = useStore();
    const introduction = ref(
      "本站是Memoyu技术分享博客。内容涵盖生活故事、.NET Core后端技术、.NET Core、微服务架构、中间件使用、C#、JavaScript等相关的研究与知识分享。"
    );
    const isShowAboutMe = computed(() => {
      return store.state.app.showAboutMe;
    });
    const state = reactive({});
    const handlerCloseAboutMe = () => {
      store.commit(AppMutationTypes.CONTROL_ABOUT_ME, false);
    };

    return {
      isShowAboutMe,
      introduction,
      ...toRefs(state),
      handlerCloseAboutMe,
    };
  },
});
</script>

<style scoped lang="scss">
.about-top {
  padding-top: 30px;
  padding-bottom: 30px;
}
.about-content {
  padding-bottom: 30px;
  .name {
    font-size: 25px;
  }
  .logo {
    width: 100px;
    height: 100px;
  }
}
.about-contact {
  .follow-button {
    width: 200px;
  }
  .contact-meta {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 20px;
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
}
</style>


