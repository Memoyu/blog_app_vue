<template>
    <p>主页哟</p>
    <el-button type="primary">按钮</el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElButton } from "element-plus";

export default defineComponent({
    name: "About",
    components: {
        ElButton
    },
    setup() {
        return {
            // 返回的数据
        };
    },
})
</script>

<style lang="scss" scoped>
</style>