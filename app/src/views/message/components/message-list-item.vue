<template>
 <div class="comments-item">
    <div class="pull-left">
      <img
        class="avatar-32"
        :src="author.avatar||defaultAvatar"
        alt="default"
        @click="handleClickAvatar"
      />
    </div>
    <div class="comments-box">
      <div class="comments-trigger">
        <div class="pull-right comments-option">
          <a
            href="javascript:void(0)"
            class="ml10"
            data-placement="top"
            :title="item.title"
            v-for="item in tools"
            :key="item.name"
            v-show="item.is_audit"
            @click="handleClickTool($event, item)"
          >
            <i :class="item.icon" v-if="item.icon"></i>
            <span v-if="item.text">{{item.text}}</span>
          </a>
        </div>
        <strong>
          <router-link
            v-if="author.id!=0"
            :to="{path:`/user/${author.id}/article`}"
            target="_blank"
            @click="handleClickAuthor"
          >{{author.nickname}}</router-link>
          <a v-if="author.id==0" @click="handleClickAuthor">{{author.nickname}}</a>
        </strong>
        <!-- <span class="comments-date">· {{time | filterTimeYmdHms}}</span> -->
      </div>
      <div class="comments-content">
        <p v-html="commentContent"></p>
      </div>
      <p class="comments-ops">
        <span class="comments-reply-btn ml15" @click="handleAddReply" v-show="isAudit">
          <i class="iconfont icon-comment coments-ops-icon"></i>
          {{replyText}}
        </span>
        <a-popconfirm
          :title="hasReply?'删除评论后，评论下的所有回复都会被删除!':'确认删除此评论'"
          @onConfirm="handleDeleteReply"
          v-show="user!=null&&author.id==user.id"
        >
          <span class="comments-reply-btn ml15" >
            <i class="iconfont icon-delete coments-ops-icon"></i>
            删除
          </span>
        </a-popconfirm>
      </p>
      <div class="comment-input" v-show="replyVisible">
        <slot name="comment-input"></slot>
      </div>
      <div class="reply-list" v-show="hasReply">
        <slot name="reply-list"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from "vue";
export default defineComponent({
  props: {},
  setup () {
    const state = reactive({
      defaultAvatar: require("@/assets/images/user/user.png"),
      nicknameChanged: false,
      username: "未登录",
      nickname: "佚名",
    });

    return {
      ...toRefs(state)
    }
  }
});
</script>

<style lang="scss" scoped>
.message-item {
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
      .message-detail {
        padding: 15px 25px;
      }
      .message-footer {
        margin-top: 5px;
      }
    }
    .reply {
      margin-top: 10px;
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