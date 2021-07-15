<template>
  <div class="main-container">
    <div class="content">
      <send-message class="message-card"></send-message>
      <message-list></message-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SendMessage from "@/components/message/send-message.vue";
import MessageList from "@/components/message/message-list.vue";

export default defineComponent({
  name: "MessageBoard",
  components: {
    SendMessage,
    MessageList
  },
});
</script>

<style lang="scss">
.message-card {
  margin-bottom: 100px;
}
</style>

