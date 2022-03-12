<template>
    <el-footer>
        <div class="foot-text">
            <span class="base">
                Prower By
                <a
                    class="green"
                    href="https://github.com/dotnet/aspnetcore"
                    target="_blank"
                >.NET 5</a>
                +
                <a
                    class="green"
                    href="https://github.com/vuejs/vue"
                    target="_blank"
                >Vue</a>
            </span>
            <span>
                © {{ year }} &nbsp;Memoyu
                <a
                    href="https://github.com/Memoyu"
                    target="_blank"
                    class="link"
                >
                    <icon class="icon" icon="GithubOutlined" />
                </a>
                <a
                    target="_blank"
                    href="https://beian.miit.gov.cn/"
                    style="color: black"
                >桂ICP备20005450号</a>
            </span>
        </div>
    </el-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElFooter } from "element-plus";

export default defineComponent({
    name: "Footer",
    components: {
        ElFooter,
    },
    setup() {
        return {
            year: new Date().getFullYear()
        };
    },
})
</script>

<style lang="scss" scoped>
footer {
    .link {
        margin: 0 10px;
        color: black;
        .icon {
            font-size: 16px;
            &:hover {
                color: #929292;
            }
        }
    }
    .foot-text {
        display: flex;
        flex-direction: column;
        position: relative;
        font-size: 14px;
        text-align: center;
        // background: #93a6ab;
        width: 100%;
        color: black;
        .base {
            span,
            .green {
                color: blue($color: #000000);
                font-size: 16px;
                margin: 0 2px;
            }
        }
    }
}
</style>