<template>
  <div class="comments-item">
    <div class="pull-left">
      <img
        class="avatar-32"
        :src="comment.userInfo.avatarUrl || defaultAvatar"
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
            <span v-if="item.text">{{ item.text }}</span>
          </a>
        </div>
        <strong>
          <router-link
            v-if="comment.id != 0"
            :to="{ path: `/user/${comment.id}/article` }"
            target="_blank"
            @click="handleClickAuthor"
            >{{ comment.userInfo.nickname }}</router-link
          >
          <a v-if="comment.id == 0" @click="handleClickAuthor">{{
            comment.userInfo.nickname
          }}</a>
        </strong>
        <span class="comments-date"> · {{ comment.createTime }}</span>
      </div>
      <div class="comments-content">
        <p v-html="commentText"></p>
      </div>
      <p class="comments-ops">
        <span class="comments-reply-btn ml15" @click="handleAddReply">
          <icon icon="MessageOutlined" /> {{ replyText }}
        </span>
        <a-popconfirm
          :title="
            hasReply
              ? '删除评论后，评论下的所有回复都会被删除!'
              : '确认删除此评论'
          "
          @onConfirm="handleDeleteReply"
        >
          <span
            class="comments-reply-btn ml15"
            v-show="user != null && comment.userInfo.id == user.id"
          >
            <icon icon="DeleteOutlined" /> 删除
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
import { defineComponent, reactive, toRefs, PropType, computed } from "vue";
import Formats from "@/utils/format-util";
import { CommentModel } from "@/models";
import { Icon } from "@/icon";
import { useStore } from "@/store";

export default defineComponent({
  name: "CommentListItem",
  components: { Icon },
  props: {
    comment: {
      type: Object as PropType<CommentModel>,
      default: () => {
        return {};
      },
    },
  },
  setup(props) {
    const store = useStore();
    const state = reactive({
      replyVisible: false,
      defaultAvatar: require("@/assets/images/user/user.png"),
    });

    const user = computed(() => {
      return store.state.app.user;
    });

    const hasReply = computed(() => {
      return props.comment.childs && props.comment.childs.length > 0;
    });

    const replyText = computed(() => {
      return state.replyVisible == true ? "取消回复" : "回复";
    });

    const commentText = computed(() => {
      return Formats.formatHtml(Formats.formatHyperLink(props.comment.text));
    });

    const handleAddReply = async (): Promise<void> => {
      state.replyVisible = !state.replyVisible;
    };

    return {
      user,
      hasReply,
      replyText,
      commentText,
      ...toRefs(state),
      handleAddReply,
    };
  },
});
</script>

<style lang="scss">
img {
  border: 0;
  vertical-align: middle;
}
.ml10 {
  margin-left: 10px !important;
}
.ml15 {
  margin-left: 15px !important;
}
.comments-item {
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  font-size: 14px;
}
.pull-left {
  float: left !important;
}
.pull-right {
  float: right !important;
}
.avatar-32 {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.avatar-32:hover {
  cursor: pointer;
}
.comments-item a {
  color: #009a61;
  text-decoration: none;
  background: transparent;
}
.comments-item a:hover,
.comments-item a:active,
.comments-item a:focus {
  outline: 0;
}
.comments-box {
  padding-left: 47px;
}
.comments-box strong {
  font-weight: bold;
}
.comments-trigger {
  margin-bottom: 10px;
  color: #999;
  font-size: 13px;
}
.comments-ops {
  .comments-reply-btn:hover {
    cursor: pointer;
    color: #5cb6ff;
  }
}
.comments-content {
  line-height: 1.6;
  word-wrap: break-word;
  margin-bottom: 10px !important;
}
.comments-content::before,
.comments-content::after {
  display: table;
}
.comments-content::after {
  content: "";
  clear: both;
}
.comments-ops {
  margin: 0;
  color: #999;
  font-size: 13px;
}
.comments-reply-btn {
  cursor: pointer;
}
.comment-input {
  margin-top: 1.083rem;
  position: relative;
  padding: 1rem 1rem 0rem 1rem;
  background-color: #fafbfc;
  border-radius: 3px;
}
.reply-list {
  margin-top: 10px;
  font-size: 13px;
  background-color: #fafafa;
  padding: 0 10px;
  color: #666;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
}
.reply-item--ops {
  border-bottom: none;
}
.reply-item {
  padding-bottom: 10px;
  padding-top: 10px;
  word-break: break-word;
}
</style>

