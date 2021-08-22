<template>
  <div>
    <a-form ref="form" :rules="rules" :model="model" layout="vertical">
      <a-form-item prop="text">
        <a-textarea 
          placeholder="请输入评论内容"
          v-model:value="model.text"
          minlength="1"
          showCount
          :maxlength="300"
        ></a-textarea>
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
.ant-form-item {
  margin-bottom: 1px !important;
  /deep/ .ant-form-item__content {
    line-height: 20px;
    margin-bottom: 10px;
  }
}
</style>

