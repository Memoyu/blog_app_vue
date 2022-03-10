<template>
    <div class="app-wrapper">
        <div class="main-container">
            <AppMain />
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppMain from './components/AppMain.vue'
import Footer from './components/footer/index.vue'

export default defineComponent({
    name: "Layout",
    components: {
        AppMain,
        Footer
    },
    setup() {
        return {
            // 返回的数据
        };
    },
})
</script>

<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
}

.main-container {
    min-height: 100%;
    transition: margin-left 0.28s;
    position: relative;
}
</style>