<template>
  <el-config-provider :zIndex="zIndex">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      zIndex: 3000
    }
  },
})
</script>

<style lang="scss">
</style>
