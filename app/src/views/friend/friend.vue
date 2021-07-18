<template>
  <div class="main-container">
    <div class="content">
      <div class="recommend-card">
        <recommend-row :recommends="recommends" />
      </div>
      <div>
        <friend-row :friends="friends" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import FriendRow from "@/components/friend/friend-row.vue";
import RecommendRow from "@/components/friend/recommend-row.vue";
import { FriendLinkModel } from "@/models";
import service from "@/api";
import { friendLink } from "@/api/urls";

export default defineComponent({
  name: "Friend",
  components: {
    FriendRow,
    RecommendRow,
  },
  setup() {
    const state = reactive({
      friends: [] as Array<FriendLinkModel>,
      recommends: [] as Array<FriendLinkModel>,
    });

    onMounted(() => {
      handleLoadLink();
    });

    const handleLoadLink = async (): Promise<void> => {
      const data: Array<FriendLinkModel> = await service.get(
        friendLink.all,
        {}
      );
      state.friends = data.filter((l) => l.type == 0);
      state.recommends = data.filter((l) => l.type == 1);
    };

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss">
.recommend-card {
  margin-bottom: 30px;
}
</style>

