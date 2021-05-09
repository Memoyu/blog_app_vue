<template>
  <div class="send-message-card-comp card-border-radius">
    <div class="send-message-card-title x-ac">留下點啥？</div>
    <div class="send-message-card-content">
      <div class="side">
        <div class="imgbox x-c">
          <img src="https://raw.githubusercontent.com/Memoyu/CoreMe/master/doc/images/memoyu.png" />
        </div>
        <div class="name fs16">蜻蜓点水3333333333333333333</div>
      </div>
      <div class="input">
        <a-textarea placeholder="知行合一" :rows="4" />
        <div class="footer y-end">
          <a-button type="primary" shape="round">发布</a-button>
        </div>
      </div>
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
.send-message-card-comp {
  padding: 10px;
  background: white;
  .send-message-card-title {
    align-items: center;
    font-size: 19px;
    font-weight: bold;
    margin: 20px;
  }
  .send-message-card-content {
    display: flex;
    .side {
      margin-right: 10px;
      width: 90px;
      .imgbox {
        width: 100%;
        margin-right: 20px;
        img {
          border-radius: 50%;
          width: 50px;
          height: 50px;
          object-fit: cover;
        }
      }
      .name {
        word-break: break-all;
        text-align: center;
        margin-top: 10px;
      }
    }
    .input {
      width: 100%;
      .ant-input {
        resize: none;
      }
      .footer {
        margin-top: 10px;
      }
    }
  }
}
</style>