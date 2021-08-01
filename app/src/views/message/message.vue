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
import SendMessage from "@/views/message/components/send-message.vue";
import MessageList from "@/views/message/components/message-list.vue";

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
  margin-bottom: 50px;
}
</style>

