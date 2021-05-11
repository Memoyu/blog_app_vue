<template>
  <div id="app">
    <core-header-nav/>
    <section class="section-content">
      <router-view class="warp animate" />
      <a-back-top />
      <core-footer/>
      <a-drawer
      title="Basic Drawer"
      placement="right"
      :mask="false"
      :closable="false"
      :visible="true"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoreHeaderNav from "@/components/core/core-header-nav.vue";
import CoreFooter from "@/components/core/core-footer.vue";

export default defineComponent({
  name: "App",
  components: {
    CoreHeaderNav,
    CoreFooter,
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
.warp {
  position: relative;
  flex: 1;
  padding: 20px 30px;
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