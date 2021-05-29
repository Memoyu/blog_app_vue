<template>
  <div class="main-container">
    <div class="content">
      <div v-html="compiledMarkdown" v-highlight></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Category",
  components: {},
  setup(props) {
    const dataMap = reactive({
      
    });
    return { ...toRefs(dataMap) };
  },
});
</script>

<style lang="scss">
</style>

