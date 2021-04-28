<template>
  <div id="app">
     <div id="main-container">
    <section class="content">
      <headernav></headernav>
      <router-view class="warp animate03" />
    </section>
  </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import headernav from '@/components/core/HeaderNav.vue';

  export default defineComponent({
    name: 'App',
    components: {
      headernav
    },
    setup() {
      return { };
    },
  });
</script>