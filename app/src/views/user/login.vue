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
            <div class="mode">
              <span class="item qq" title="QQ" @click="handlerpartyLogin('qq')">
                <icon icon="QqOutlined"></icon>
              </span>
              <span
                class="item github"
                title="GitHub"
                @click="handlerpartyLogin('github')"
              >
                <icon icon="GithubOutlined"></icon>
              </span>
              <span
                class="item gitee"
                title="Gitee"
                @click="handlerpartyLogin('gitee')"
              >
                <svg
                  t="1607925359875"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2562"
                  width="24"
                  height="24"
                  fill="currentcolor"
                >
                  <path
                    d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z"
                    p-id="2563"
                  ></path>
                </svg>
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
import { Icon } from "@/icon.ts";
import { AppMutationTypes } from "@/store/modules/app/types";

export default defineComponent({
  name: "Login",
  components: {
      Icon
  },
  setup() {
    const store = useStore();
    const state = reactive({});
    const isShowLogin = computed(() => {
      return store.state.app.showLogin;
    });

    const handlerpartyLogin = async (party: string): Promise<void> => {
      console.log(party);
    }; 
    
    const handlerCloseLogin = async (): Promise<void> => {
      store.commit(AppMutationTypes.CONTROL_LOGIN, false);
    };

    return {
      isShowLogin,
      ...toRefs(state),
      handlerCloseLogin,
      handlerpartyLogin,
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

    .login {
      width: 430px;
      box-shadow: 0 0px 25px 5px rgba(46, 58, 89, 0.1);
      background: linear-gradient(180deg, #dcf4ff, #f4fcff);
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
        margin-bottom: 16px;
        box-sizing: border-box;
        margin: 0;
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 1.5715;
        list-style: none;
        font-feature-settings: 'tnum';
        position: relative;
        padding: 8px 15px 8px 37px;
        word-wrap: break-word;
        border-radius: 20px;
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
          border: 2px solid #efefef;
          border-radius: 50%;
          font-size: 24px;
          margin: 10px;
          transition: all 0.3s;
          cursor: pointer;
        }

        .qq {
          color: #7bd4ef;

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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
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
