<template>
  <div class="main-container">
    <div class="content">
      <recommend-row class="recommend-card"></recommend-row>
      <friend-row></friend-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FriendRow from "@/components/friend/friend-row.vue";
import RecommendRow from "@/components/friend/recommend-row.vue";

export default defineComponent({
  name: "Friend",
  components: {
    FriendRow,
    RecommendRow,
  },
});
</script>

<style lang="scss">
.recommend-card {
  margin-bottom: 30px;
}
</style>

