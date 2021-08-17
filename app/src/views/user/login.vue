<template>
  <teleport to="body">
    <transition name="fade">
      <div class="login-modal" v-show="isShowLogin">
        <div class="login-mask"></div>
        <div class="login-wrap">
          <div class="login concise">
            <span class="close" @click="handlerCloseLogin"
              ><icon icon="CloseOutlined"></icon
            ></span>
            <p class="title">欢迎登录</p>
            <div class="alert">
              <span>目前只支持如下第三方账户登录哦！</span>
            </div>
            <div class="mode">
              <span class="item github" @click="handlerPartyLogin('GitHub')">
                <icon icon="GithubOutlined"></icon>
              </span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from "vue";
import { useStore } from "@/store";
import { useRoute } from "vue-router";
import { Icon } from "@/icon";
import { AppMutationTypes } from "@/store/modules/app/types";

export default defineComponent({
  name: "Login",
  components: {
    Icon,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const state = reactive({});
    const isShowLogin = computed(() => {
      return store.state.app.showLogin;
    });

    const handlerPartyLogin = async (provider: string): Promise<void> => {
      window.localStorage.setItem("OAUTH_LOGIN_URL", route.path);
      var url = `${process.env.VUE_APP_BASE_URL}oauth2/signin?provider=${provider}&redirectUrl=${process.env.VUE_APP_CURRENT_URL}`;
      window.location.href = url;
    };

    const handlerCloseLogin = async (): Promise<void> => {
      store.commit(AppMutationTypes.CONTROL_LOGIN, false);
    };

    return {
      isShowLogin,
      ...toRefs(state),
      handlerCloseLogin,
      handlerPartyLogin,
    };
  },
});
</script>

<style lang="scss">
.login-modal {
  .login-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
  }

  .login-wrap {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .concise {
      padding: 40px 32px;
      border-radius: 20px;
      margin-top: 10px;
      /* box-shadow: 0 0px 25px 5px rgba(46, 58, 89, 0.1); */
      box-sizing: border-box;
      background-color: #fff;
      transition: box-shadow 0.3s;
    }

    .login {
      width: 430px;
      box-shadow: 0 0px 25px 5px rgba(46, 58, 89, 0.1);
      // background: linear-gradient(180deg, #dcf4ff, #f4fcff);
      position: relative;

      &:hover {
        box-shadow: 0 30px 50px 20px rgba(46, 58, 89, 0.1);
      }

      .close {
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 20px;
        color: #ccc;
        cursor: pointer;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
      }

      .title {
        font-size: 25px;
        text-align: center;
        line-height: 46px;
        color: #2e3a59;
        margin-bottom: 10px;
        font-weight: 700;
        font-family: GlowSansSC-ExtendedHeavy;
      }

      .alert {
        box-sizing: border-box;
        margin: 0;
        color: rgba(0, 0, 0, 0.65);
        font-size: 15px;
        font-variant: tabular-nums;
        line-height: 1.5715;
        list-style: none;
        font-feature-settings: "tnum";
        position: relative;
        padding: 18px 0px;
        text-align: center;
        word-wrap: break-word;
        border-radius: 12px;
        background-color: #fffbe6;
        position: relative;

        .icon {
          position: absolute;
          top: 12.0005px;
          left: 16px;
          color: #faad14;
        }
      }

      .mode {
        display: flex;
        align-items: center;
        justify-content: center;

        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          font-size: 30px;
          margin: 10px;
          transition: all 0.3s;
          cursor: pointer;
        }

        .qq {
          color: #12b7f5;

          &:hover {
            background: rgba(123, 212, 239, 0.4);
            border-color: #7bd4ef;
          }
        }

        .github {
          color: #383838;

          &:hover {
            background: rgba(56, 56, 56, 0.4);
            border-color: #383838;
          }
        }

        .gitee {
          color: #fe7300;

          &:hover {
            background: rgba(254, 115, 0, 0.4);
            border-color: #fe7300;
          }
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 500px) {
  .login-modal {
    .login-wrap {
      .login {
        width: 90%;
        margin: 0 5%;

        .title {
          font-size: 20px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
