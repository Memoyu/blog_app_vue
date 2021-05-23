<template>
  <a-drawer placement="right" :mask="false" :closable="false" :visible="isShowAboutMe">
    <div class="y-f about-content">
      <img class="logo" src="@/assets/icons/logo.png" alt />
      <span class="name">Memoyu</span>
      <marquee scrollamount="3">{{introduction}}</marquee>
      <span>
        <icon icon="EnvironmentOutlined"></icon>Guangzhou
      </span>
    </div>
    <div class="about-contact">
      <a-button class="follow-button" type="primary" shape="round">关注我</a-button>
      <div class="x-ac fs20 contact-button">
        <icon icon="GithubOutlined"></icon>
        <icon icon="QqOutlined"></icon>
        <icon icon="MailOutlined"></icon>
      </div>
    </div>

    <div class="x-ac about-top">
      <a-button type="primary" shape="circle" @click="closeAboutMe">
        <template #icon>
          <icon style="font-weight: bold;" icon="CloseOutlined"></icon>
        </template>
      </a-button>
    </div>
  </a-drawer>
</template>

<script>
import { computed, reactive, ref, toRefs, defineComponent } from "vue";
import { useStore } from "@/store";
import { Icon } from "@/icon.ts";
import { AppActionTypes } from "@/store/modules/app/types";

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
    const state = reactive({
      closeAboutMe() {
        store.dispatch(AppActionTypes.ACTION_HIDE_ABOUT_ME);
      },
    });

    return {
      isShowAboutMe,
      introduction,
      ...toRefs(state),
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
  .contact-button {
    padding-top: 20px;
  }
}
</style>


