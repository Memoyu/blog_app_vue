<template>
    <div class="b-introduction">
        <div class="b-introduction-avatar">
            <a href="javascript:;">
                <img :src="logo" />
            </a>
        </div>

        <div class="b-introduction-content">
            <div class="nickname">Memoyu Blog</div>
            <div class="motto-text">
                <p>
                    知行合一
                    <br />Knowledge as action
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import logo from '@/assets/images/logo.png'
import { ElButton } from "element-plus";

export default defineComponent({
    name: "About",
    components: {
        ElButton
    },
    setup() {
        return {
            logo
        };
    },
})
</script>

<style lang="scss" scoped>
.b-introduction {
    text-align: center;
    width: 100%;
    position: fixed;
    top: 30%;

    &-avatar {
        padding: 10px;
        text-align: center;

        img {
            display: inline-block;
            margin: 0 auto;
            width: 128px;
            height: auto;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            -webkit-box-shadow: 0 0 0 0.3618em rgba(0, 0, 0, 0.05);
            box-shadow: 0 0 0 0.3618em rgba(0, 0, 0, 0.05);
            cursor: pointer;
            -webkit-transition: all ease 0.4s;
            -moz-transition: all ease 0.4s;
            -o-transition: all ease 0.4s;
            transition: all ease 0.4s;
        }

        img:hover {
            position: relative;
            cursor: pointer;
            -webkit-transform: translateY(-0.75em);
            -moz-transform: translateY(-0.75em);
            -o-transform: translateY(-0.75em);
            transform: translateY(-0.75em);
            -ms-transform: translateY(-0.75em);
        }
    }

    &-content {
        .nickname {
            //width:100%;
            margin-bottom: 30px;
            font-size: $h1-font-size;
            font-weight: 700;
        }

        .motto-text {
            font-size: 14px;
            font-weight: bold;
            color: #666;
        }
    }
}
</style>