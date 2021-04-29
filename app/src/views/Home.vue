<template>
  <div class="main-container">
    <div
      id="left"
      style="width: 20%; background: red; height: 500px; float: left"
    >
      左边
    </div>
    <div
      id="zhong"
      style="width: 49.9%; background: yellow; height: 500px; float: left"
    >
      中间
    </div>
    <div
      id="right"
      style="width: 30%; background: green; height: 500px; float: left"
    >
      右边
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
});
</script>

<style lang="scss">
</style>

