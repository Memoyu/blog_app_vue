<template>
  <div class="user">
    <a-dropdown placement="bottomRight">
      <span class="a-dropdown-link">
        <div class="nav-avatar">
          <img src="../../assets/images/user/user.png" alt="头像" />
        </div>
      </span>
      <template #overlay>
        <a-menu class="user-box">
          <div class="user-info">
            <div class="avatar">
              <img src="../../assets/images/user/user.png" alt="头像" />
            </div>
            <div class="text">
              <div
                class="username"
                @click="handlerChangeNickname"
                v-if="!nicknameChanged"
              >
                {{ nickname }}
              </div>
              <a-input
                placeholder="请输入内容"
                size="small"
                v-else
                v-model="nickname"
                ref="inputRef"
                @blur="handlerBlur"
              ></a-input>
            </div>
            <img src="../../assets/images/user/corner.png" class="corner" />
            <div class="info">
              <div class="username">{{ username }}</div>
            </div>
          </div>
          <a-menu-item> <icon icon="UserOutlined" />我的主页</a-menu-item>
          <a-menu-item> <icon icon="EditOutlined" />创作者中心</a-menu-item>
          <a-menu-item> <icon icon="SettingOutlined" />设置</a-menu-item>
          <a-menu-item> <icon icon="LogoutOutlined" />退出账户</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  reactive,
  toRefs,
  PropType,
} from "vue";
import { Icon } from "@/icon";

export default defineComponent({
  components: { Icon },
  props: {
    user: {
      type: Object as PropType<any>,
      default: () => {
        return {};
      },
    },
  },
  setup() {
    const inputRef = ref<HTMLElement | null>(null);
    const state = reactive({
      nicknameChanged: false,
      nickname: "memoyu",
      username: "memoyu",
    });
    onMounted(() => {
      console.log(inputRef.value);
    });

    const handlerChangeNickname = async (): Promise<void> => {
      state.nicknameChanged = true;
      console.log(inputRef.value);
      setTimeout(() => {
       // inputRef.value?.focus();
      }, 200);
    };

    const handlerBlur = async () : Promise<void> =>{
      state.nicknameChanged = false;
    };
    return {
      inputRef,
      ...toRefs(state),
      handlerChangeNickname,
      handlerBlur,
    };
  },
});
</script>

<style lang="scss" scoped>
.user {
  height: 40px;
  .a-dropdown-link {
    cursor: pointer;

    .nav-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
      img {
        width: 100%;
      }
    }
  }
}

.user-box {
  top: 10px;
  width: 326px;
  background-color: none;
  margin-bottom: 0;
  padding-bottom: 0;
  border: none;

  .user-info {
    background-image: url("../../assets/images/user/user-bg.png");
    background-size: 100% 100%;
    transform: translateY(-10px);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    flex-direction: row;
    padding: 35px 20px 25px 30px;
    z-index: 100;
    position: relative;

    .corner {
      position: absolute;
      right: 18px;
      top: -9px;
      width: 27px;
      height: 10px;
    }

    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      cursor: pointer;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
      }
      .mask {
        opacity: 0;
        transition: all 0.2s;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: white;

        input {
          display: none;
        }
      }

      &:hover {
        .mask {
          opacity: 1;
        }
      }
    }

    .text {
      margin-left: 20px;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .username {
        margin-bottom: 10px;
        font-size: 16px;
        cursor: pointer;
      }

      .desc {
        font-size: 14px;
        color: rgba(222, 226, 230, 1);
      }
    }

    .info {
      position: absolute;
      bottom: 10px;
      right: 10px;
      display: flex;
      color: #fff;
      font-size: 14px;
      height: 20px;
      line-height: 20px;

      .mid {
        padding: 0 5px;
      }
    }
  }

  .dropdown-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 35px;
    height: 122px;
    color: #596c8e;
    font-size: 14px;
    background: white;
    margin-top: -10px;

    li {
      cursor: pointer;

      &:nth-child(1) {
        margin-top: 20px;
      }

      &:nth-child(2) {
        margin-bottom: 20px;
      }

      i {
        margin-right: 10px;
      }

      &:hover {
        color: $primaryColor !important;

        i {
          color: $primaryColor !important;
        }
      }
    }
  }
}

.popper__arrow {
  display: none !important;
}

.avatar-croppa-container {
  display: inline-block;
  border-color: #3862bc;
  border-style: dashed;
  font-size: 0;
  border-width: 2px;
}
</style>