<template>
<div>
    <div class="reply-item">
      <div class="pull-left">
        <img class="avatar-32" :src="author.avatar||defaultAvatar" alt @click="handleClickAvatar" />
      </div>
      <div class="reply-content-block">
        <div class="comment-func">
          <span class="comment-meta inline-block">
            <a
              target="_blank"
              :href="`/user/${author.id}/article`"
              @click="handleClickAuthor($event)"
            >{{author.nickname}}</a>
            <template v-if="resp_user_info!=null">
              <span style="margin:0px 5px;">回复</span>
              <a
                target="_blank"
                :href="`/user/${resp_user_info.id}/article`"
              >{{resp_user_info.nickname}}</a>
            </template>
            <span class="comments-date">· {{time}}</span>
          </span>
          <span class="pull-right comment-tools ml15">
            <a
              href="javascript:void(0)"
              class="ml10"
              data-placement="top"
              :title="item.title"
              v-for="item in tools"
              :key="item.name"
              @click="handleClickTool($event, item)"
            >
              <i :class="item.icon" v-if="item.icon"></i>
              <span v-if="item.text">{{item.text}}</span>
            </a>
          </span>
        </div>
        <div class="reply-content">
          <p v-html="commentContent"></p>
        </div>
      </div>
      <div class="comments-ops">
        <div class="coments-ops-item">
          <span class="comments-reply-btn ml15" @click="handleAddReply">
            <i class="iconfont icon-comment coments-ops-icon"></i>
            {{replyText}}
          </span>
          <a-popconfirm
            class="comments-reply-btn"
            title="确认删除此评论"
            @onConfirm="handleDeleteReply"
            v-show="user!=null&&author.id==user.id"
          >
            <span class="ml15">
              <i class="iconfont icon-delete coments-ops-icon"></i>
              删除
            </span>
          </a-popconfirm>
        </div>
      </div>
      <div class="comment-input" v-show="replyVisible">
        <slot name="reply-item-input"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ReplyItem",
  components: {},
});
</script>

<style lang="scss">
.pull-left {
  float: left !important;
}
.avatar-32 {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.avatar-32:hover {
  cursor: pointer;
}

.ml10 {
  margin-left: 10px !important;
}
.ml15 {
  margin-left: 15px !important;
}
.pull-left {
  float: left !important;
}
.pull-right {
  float: right !important;
}
.reply-item {
  padding-bottom: 10px;
  padding-top: 10px;
  line-height: 1.6;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.09);
  word-break: break-word;
  .reply-content-block {
    margin-bottom: 10px !important;
    padding-left: 47px;
    .reply-content {
      display: inline-block;
      margin-top: 0.5rem;
    }
  }
}
.reply-item a {
  color: #009a61;
  text-decoration: none;
  background: transparent;
}
.reply-item a:hover,
.reply-item a:active,
.reply-item a:focus {
  outline: 0;
}
.reply-item p {
  margin-bottom: 5px;
}
.comment-meta {
  color: #999;
}
.inline-block {
  display: inline-block;
}

.comments-ops {
  .comments-reply-btn {
    &:hover {
      cursor: pointer;
      color: #5cb6ff;
    }
  }
}
</style>

