<template>
  <div id="app">
    <headernav></headernav>
    <section class="content">
      <router-view class="warp animate" />
      <cufooter></cufooter>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import headernav from "@/components/core/HeaderNav.vue";
import cufooter from "@/components/core/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    headernav,
    cufooter,
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
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
.wrap {
  position: relative;
  flex: 1;
  background: #fff;
  padding: 20px 30px;
  box-sizing: border-box;
  .head {
    height: 60px;
    span {
      padding-right: 5px;
    }
  }
}
.animate {
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -ms-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
</style>