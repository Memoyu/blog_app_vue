<template>
  <div class="message-comp">
    <div class="message-detail-item" v-for="item in [1,2,3,4,5,6,7,8,9,10,11,]" :key="item.id">
      <message-list-item></message-list-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MessageListItem from "./message-list-item.vue";

export default defineComponent({
  props: {},
  components: {
    MessageListItem,
  },
});
</script>

<style lang="scss" scoped>
.message-comp {
  .message-detail-item {
    margin-bottom: 20px;
  }
}
</style>