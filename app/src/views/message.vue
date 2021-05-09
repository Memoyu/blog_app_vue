<template>
  <div class="main-container">
    <div class="content">
      <send-message-card class="message-card"></send-message-card>
      <message-list-card></message-list-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SendMessageCard from "@/components/message/send-message-card.vue";
import MessageListCard from "@/components/message/message-list-card.vue";

export default defineComponent({
  name: "MessageBoard",
  components: {
    SendMessageCard,
    MessageListCard
  },
});
</script>

<style lang="scss">
.message-card {
  margin-bottom: 30px;
}
</style>

