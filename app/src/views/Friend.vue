<template>
  <div class="main-container">
    <div class="content">
      <recommend-row-card class="recommend-card"></recommend-row-card>
      <friend-row-card></friend-row-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FriendRowCard from "@/components/friend/friend-row-card.vue";
import RecommendRowCard from "@/components/friend/recommend-row-card.vue";

export default defineComponent({
  name: "Friend",
  components: {
    FriendRowCard,
    RecommendRowCard,
  },
});
</script>

<style lang="scss">
.recommend-card {
  margin-bottom: 30px;
}
</style>

