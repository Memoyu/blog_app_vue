<template>
  <div class="main-container warp">
    <router-link :to="{ path: '/' }">
      <a-button type="primary">回到首页</a-button>
    </router-link>
    <div class="margin-top-lg">
      <a-alert :title="errorMsg" type="error" v-if="error == true"></a-alert>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "@/store";
import { saveTokens } from "@/utils/token";
import service from "@/api";
import { account } from "@/api/urls";
import { UserModel } from "@/models";
import { AppActionTypes } from "@/store/modules/app/types";

export default defineComponent({
  name: "LoginResult",
  components: {},
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const state = reactive({
      error: false,
      errorMsg: "",
    });
    const isShowLogin = computed(() => {
      return store.state.app.showLogin;
    });
    onMounted(() => {
      var result = route.query;
      if (!(result && result.token)) {
        state.errorMsg = "无效的登录";
        state.error = true;
        return;
      }
      saveTokens(result.token as string, "");
      handlerGetUserInfo();
    });

    const handlerGetUserInfo = async (): Promise<void> => {
      try {
        const data: UserModel = await service.get(account.detail, {});
        store.dispatch(AppActionTypes.ACTION_SET_USER_AND_STATUS, data);
      } catch (e) {
        console.log(e);
      } finally {
        let page = window.localStorage.getItem("OAUTH_LOGIN_URL");
        if (page) router.push(page);
      }
    };

    return {
      isShowLogin,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss">
</style>