<template>
    <footer>
        <div class="foot-content">
            <span class="base">
                Prower By
                <a
                    class="footer-link"
                    href="https://github.com/dotnet/aspnetcore"
                    target="_blank"
                >.NET 6</a>
                +
                <a
                    class="footer-link"
                    href="https://github.com/vuejs/vue"
                    target="_blank"
                >Vue</a>
            </span>
            <span>
                © {{ new Date().getFullYear() }}
                <a
                    href="https://github.com/Memoyu"
                    target="_blank"
                    class="footer-link"
                >Memoyu</a>

                <a
                    target="_blank"
                    href="https://beian.miit.gov.cn/"
                    class="footer-link"
                >桂ICP备20005450号</a>
            </span>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Footer",
    components: {
    },
    setup() {
        return {
        };
    },
})
</script>

<style lang="scss" scoped>
footer {
    margin-bottom: 5px;
    .foot-content {
        display: flex;
        flex-direction: column;
        position: relative;
        font-size: 14px;
        text-align: center;
        width: 100%;
        .footer-link {
            display: inline-block;
            margin: 0 10px;
            line-height: 1.2;
            text-decoration: none;
            color: black;

            &:hover,
            &:focus {
                color: $primary;
            }
        }
    }
}
</style>