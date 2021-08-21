<template>
  <div>
    <a-form ref="form" :rules="rules" :model="model">
      <a-form-item prop="text">
        <a-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="请输入评论内容"
          v-model="model.text"
          minlength="1"
          :maxlength="surplus"
          show-word-limit
        ></a-input>
      </a-form-item>
      <a-form-item style="text-align: right">
        <a-button
          type="primary"
          @click="addComment"
          :disabled="model.text == ''"
          >发布</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "CommentInput",
  components: {},
  setup() {
    const state = reactive({
      model: {
        text: "",
      },
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss">
.a-form-item {
  margin-bottom: 1px !important;
  /deep/ .el-form-item__content {
    line-height: 20px;
    margin-bottom: 10px;
  }
}
</style>

