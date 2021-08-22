<template>
  <div>
    <div class="reply-item">
      <div class="pull-left">
        <img
          class="avatar-32"
          :src="comment.userInfo.avatarUrl || defaultAvatar"
          alt
          @click="handleClickAvatar"
        />
      </div>
      <div class="reply-content-block">
        <div class="comment-func">
          <span class="comment-meta inline-block">
            <a
              target="_blank"
              :href="`/user/${comment.userInfo.id}/article`"
              @click="handleClickAuthor($event)"
              >{{ comment.userInfo.nickname }}</a
            >
            <template v-if="comment.respUserInfo != null">
              <span style="margin: 0px 5px">回复</span>
              <a
                target="_blank"
                :href="`/user/${comment.respUserInfo.id}/article`"
                >{{ comment.respUserInfo.nickname }}</a
              >
            </template>
            <span class="comments-date"> · {{ comment.createTime }}</span>
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
              <span v-if="item.text">{{ item.text }}</span>
            </a>
          </span>
        </div>
        <div class="reply-content">
          <p v-html="commentText"></p>
        </div>
      </div>
      <div class="comments-ops">
        <div class="coments-ops-item">
          <span class="comments-reply-btn ml15" @click="handleAddReply">
             <icon icon="MessageOutlined" />
            {{ replyText }}
          </span>
          <a-popconfirm
            class="comments-reply-btn"
            title="确认删除此评论"
            @onConfirm="handleDeleteReply"
          >
            <span class="ml15" v-show="user != null && comment.userInfo.id == user.id">
              <icon icon="DeleteOutlined" />
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
import { defineComponent, reactive, toRefs, computed, PropType } from "vue";
import { useStore } from "@/store";
import { CommentModel } from "@/models";
import Formats from "@/utils/format-util";
import { Icon } from "@/icon";

export default defineComponent({
  name: "ReplyItem",
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
      replyText,
      commentText,
      ...toRefs(state),
      handleAddReply,
    };
  },
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

