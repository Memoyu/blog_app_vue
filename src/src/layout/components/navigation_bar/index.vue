<template>
    <p>导航栏</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElButton } from "element-plus";

export default defineComponent({
    name: "Navigation",
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