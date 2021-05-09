<template>
  <div class="message-comp card-border-radius">
    <div class="message-content-left">
      <div class="imgbox x-c">
        <img src="https://raw.githubusercontent.com/Memoyu/CoreMe/master/doc/images/memoyu.png" />
      </div>
      <div></div>
    </div>

    <div class="message-content-right">
      <div class="message">
        <div class="message-sponsor">
          <span class="message-user">留言人</span>
          <span class="message-date">2021-05-09 23:30:22</span>
          <span class="message-floor pull-right">1楼</span>
        </div>
        <div class="message-text">这是回复！！！！！！！！！</div>
        <div class="message-footer pull-right">
          <a-button type="link" size="large">回复</a-button>
        </div>
      </div>
      <div class="reply">
        <div class="reply-input">
          <a-textarea placeholder="回复 XXXXXX:" :rows="4" />
          <div class="reply-footer pull-right">
            <a-space>
              <a-button type="primary" shape="round">取消回复</a-button>
              <a-button type="primary" shape="round">回复留言</a-button>
            </a-space>
          </div>
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
.message-comp {
  display: flex;
  padding: 10px;
  background: white;
  .message-content-left {
    width: 90px;
    .imgbox {
      width: 100%;
      margin-right: 20px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
  }
  .message-content-right {
    width: 100%;
    .message {
      .message-sponsor {
        font-size: 15px;
        font-weight: bold;
        .message-user {
          margin-right: 20px;
        }
        .message-date {
        }
        .message-floor {
        }
      }
      .message-text {
        margin: 15px;
      }
      .message-footer {
        margin-top: 5px;
      }
    }
    .reply {
      .reply-input {
        .ant-input {
          resize: none;
        }
      }
      .reply-footer {
        margin-top: 5px;
      }
    }
  }
}
</style>