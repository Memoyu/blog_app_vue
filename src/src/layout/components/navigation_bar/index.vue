<template>
    <el-header class="header app-container">
        <div class="header-container">
            <div class="nav-bar">
                <div class="content-center">
                    <div class="title-container content-center">
                        <div class="title">
                            <a class="title-content" @click="navTo('/')">Memoyu</a>
                            <span class="subtitle">知行合一</span>
                        </div>
                    </div>
                    <!-- 菜单 -->
                    <li
                        v-for="(item, index) in nav"
                        :key="index"
                        :class="{ active: $route.path == item.path }"
                    >
                        <el-button
                            type="text"
                            size="large"
                            @click="navTo(item.path)"
                        >{{ item.name }}</el-button>
                    </li>
                    <el-row>
                        <el-button type="text" size="large" circle>
                            <i class="iconfont iconwechat" />
                        </el-button>
                        <el-button type="text" size="large" circle>
                            <i class="iconfont icongithub" />
                        </el-button>
                    </el-row>
                </div>
                <!-- <div class="x-c">
                    <div v-if="!isLogin" class="default-avatar" @click="handlerLogin">
                        <img src="../../assets/images/user/user.png" alt="头像" />
                    </div>
                    <user-avatar v-else-if="isLogin" />
                </div>-->
            </div>
        </div>
    </el-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElHeader } from "element-plus";
import { RouteLocationRaw, useRouter } from "vue-router";
export default defineComponent({
    name: "Footer",
    components: {
        ElHeader
    },
    setup() {
        const router = useRouter();
        const nav = [
            { name: "文章", path: "/article", icon: "ios-book" },
            // { name: "分类", path: "/category", icon: "logo-octocat" },
            // { name: "标签", path: "/tag", icon: "logo-octocat" },
            { name: "友链", path: "/friend", icon: "logo-octocat" },
            // { name: "留言", path: "/message", icon: "md-chatboxes" },
        ];

        const navTo = (path: string) => router.push({ path: path })

        return {
            nav,
            navTo
        }
    }
})
</script>

<style lang="scss" scoped>
header {
    margin-left: auto;
    margin-right: auto;
    height: auto;
    .header-container {
        padding-top: 4rem;
        padding-bottom: 2rem;
        display: flex;
        min-height: 70px;
        color: #000;
        position: relative;
        width: 100%;
        .nav-bar {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .title-container {
                margin-right: auto;
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
                display: flex;
                flex-direction: column;
                text-align: end;
                .title-content {
                    display: inline-block;
                    margin: 0;
                    font-size: $h3-font-size;
                    font-weight: 700;
                    line-height: 1.2;
                    text-decoration: none;

                    &:visited {
                        color: black;
                    }
                    &:hover,
                    &:focus {
                        color: $primary;
                    }
                }

                .subtitle {
                    font-weight: normal;
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
            }
        }
    }
}
</style>