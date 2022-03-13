<template>
  <el-config-provider>
    <el-container direction="vertical">
      <Navbar />
      <el-main>
        <keep-alive>
          <router-view />
        </keep-alive>
      </el-main>
      <Footer />
    </el-container>
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider, ElContainer, ElMain } from 'element-plus'
import Footer from '@/layout/components/footer/index.vue'
import Navbar from '@/layout/components/navigation_bar/index.vue'

export default defineComponent({
  components: {
    ElConfigProvider,
    ElContainer,
    ElMain,
    Footer,
    Navbar
  },
  setup() {
    return {
    }
  },
})
</script>

<style lang="scss">
</style>
