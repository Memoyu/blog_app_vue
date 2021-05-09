<template>
  <div class="card card-border-radius">
    <div>
      他的希望和信心从不消失，如今正像微风渐起那么重新旺盛起来。—《老人与海》
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {},
});
</script>

<style lang="scss" scoped>
.card {
  padding: 10px;
  flex-direction: column;
  height: 400px;
  min-height: 0;
  background: #fff;
  border: none;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
}
</style>