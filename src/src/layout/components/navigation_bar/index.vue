<template>
    <el-header class="header">
        <div class="menu">
            <div class="content-center">
                <div class="title-container content-center">
                    <img class="logo" src="@/assets/images/logo.png" />
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
                    <el-button>{{ item.name }}</el-button>
                </li>
            </div>
            <div class="x-c">
                <!-- <div v-if="!isLogin" class="default-avatar">
            <img src="../../assets/images/user/user.png" alt="头像" />
          </div>
                <user-avatar v-else-if="isLogin"/>-->
            </div>
        </div>
    </el-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElHeader } from "element-plus";

export default defineComponent({
    name: "Navigation",
    components: {
        ElHeader
    },
    setup() {
        const nav = [
            { name: "首页", url: "/", icon: "ios-book" },
            // { name: "分类", url: "/category", icon: "logo-octocat" },
            // { name: "标签", url: "/tag", icon: "logo-octocat" },
            { name: "友链", url: "/friend", icon: "logo-octocat" },
            // { name: "留言", url: "/message", icon: "md-chatboxes" },
        ];
        return {
            nav
        };
    },
})
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
            a {
                font-size: 16px;
                color: #000;
            }
        }
    }
}
</style>