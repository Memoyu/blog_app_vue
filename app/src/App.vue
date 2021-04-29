<template>
  <div id="app">
    <div id="main-container">
      <section class="content">
        <headernav></headernav>
        <router-view class="warp animate" />
        <cufooter></cufooter>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import headernav from "@/components/core/HeaderNav.vue";
import cufooter from '@/components/core/Footer.vue'

export default defineComponent({
  name: "App",
  components: {
    headernav, 
    cufooter
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
body {
  background: url("./assets/images/background.png");
}
#app{
  height: 100%;
  min-height: 550px;
}
.animate{
	-webkit-transition-duration:0.3s;
	-moz-transition-duration:0.3s;
	-ms-transition-duration:0.3s;
	transition-duration:0.3s;
}
</style>