<template>
  <div>
    <el-card class="margin-top-xs" v-if="commentable == false">
      <section>
        <el-row type="flex" align="center">
          <el-col :span="12" justify="left">
            <h4 style="line-height: 32px">评论已关闭</h4>
          </el-col>
          <el-col :span="12" justify="right" v-show="authorid == user.id">
            <el-button
              type="primary"
              plain
              style="float: right"
              @click="() => updateCommentable(true)"
              >开启评论</el-button
            >
          </el-col>
        </el-row>
      </section>
    </el-card>
    <div v-else>
      <el-card
        shadow="never"
        :body-style="{ 'padding-bottom': '0px' }"
        style="margin-bottom: 20px; margin-top: 20px"
      >
        <comment-input
          @success="getComments"
          :form="{
            articleId: articleId,
            respId: respId,
            rootCommentId: null,
            respUserId: respUserId,
          }"
        ></comment-input>
      </el-card>
      <el-card shadow="never">
        <!-- :ops="[
                {
                  count:comment.likes_quantity,
                  name:'点赞',
                  icon:'iconfont icon-'+(comment.is_liked?'like-fill':'like'),
                  click:()=>handleLike(comment,index)
           
                }
        ]"-->
        <div class="clearfix">
          <span>全部评论</span>
          <a-popconfirm
            confirmButtonText="确认"
            cancelButtonText="取消"
            icon="el-icon-info"
            iconColor="red"
            title="你确认要关闭评论"
            @onConfirm="() => updateCommentable(false)"
          >
            <a-button style="float: right; padding: 3px 0" type="text"
              >关闭评论</a-button
            >
          </a-popconfirm>
        </div>
        <comment-list-item
          v-for="(comment, index) in comments"
          :key="comment.id"
          :comment="comment"
          @clickAvatar="handleClickAvatar(comment)"
          @clickAuthor="handleClickAuthor(comment)"
          @addReply="handleAddReply(comment, index)"
          @deleteReply="handleDeleteReply(comment, index)"
          @clickTool="($event, item) => handleClickTool(item, comment, index)"
          :tools="[
            {
              text: comment.likes_quantity,
              title: '点赞',
              name: 'like',
              icon:
                'iconfont icon-' + (comment.is_liked ? 'like-fill' : 'like'),
              is_audit: comment.is_audit,
            },
          ]"
        >
          <comment-input
            @success="() => getTopComments(comment.id, index)"
            :form="{
              articleId: articleId,
              respId: comment.id,
              rootCommentId: comment.id,
              respUserId: comment.userInfo.id,
            }"
          ></comment-input>
          <reply-item
            v-for="(reply, i) in comment.top_comment"
            :key="reply.id"
            :author="reply.user_info"
            :resp_user_info="reply.resp_user_info"
            :content="reply.text"
            :time="reply.create_time"
            @clickTool="
              ($event, item) => handleClickReplyTool(item, reply, index, i)
            "
            @addReply="handleAddCommentReply(reply, index, i)"
            @deleteReply="handleDeleteCommentReply(reply, index, i)"
            :replyVisible="reply.replyVisible"
            :tools="[
              {
                text: reply.likes_quantity,
                title: '点赞',
                name: 'like',
                icon:
                  'iconfont icon-' + (reply.is_liked ? 'like-fill' : 'like'),
              },
            ]"
          >
            <comment-input
              @success="() => getTopComments(reply.root_comment_id, index)"
              :form="{
                articleId: articleId,
                respId: reply.id,
                rootComment_id: reply.rootCommentId,
                respUserId: reply.userInfo.id,
              }"
            ></comment-input>
          </reply-item>
        </comment-list-item>

        <infinite-loading
          @infinite="handleInfiniteLoad"
          spinner="bubbles"
          :identifier="any"
        >
          <template #no-more>
            <el-divider>我也是有底线的...</el-divider>
          </template>
          <template #no-results>
            <el-divider>没有更多评论了...</el-divider>
          </template>
        </infinite-loading>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import InfiniteLoading from "vue-infinite-loading";
import { defineComponent, reactive, toRefs } from "vue";
import CommentInput from "./comment-input.vue";
import CommentListItem from "./comment-list-item.vue";
import ReplyItem from "./reply-item.vue";
import { CommentModel, CommentPageModel } from "@/models";
import service from "@/api";
import { comment } from "@/api/urls";

export default defineComponent({
  name: "CommentList",
  components: {
    InfiniteLoading,
    CommentInput,
    CommentListItem,
    ReplyItem,
  },
  props: {
    articleId: {
      type: Number,
    },
    respUserId: {
      type: Number,
    },
    authorId: {
      type: Number,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      comments: [] as Array<CommentModel>,
      params: {
        articleId: 0,
        // rootCommentId: 0,
        page: 1,
        size: 10,
        sort: "",
      },
      total: 0,
    });
    const handleInfiniteLoad = async ($state: any): Promise<void> => {
      const currentPage = state.params.page;
      let res = await handleLoadCommont();
      res.items.forEach((item: CommentModel) => {
        item.replyVisible = false;
        item.childs.forEach((val) => {
          val.replyVisible = false;
        });
      });
      if (res.items.length == 0) {
        $state && $state.complete();
        if (currentPage == 0) {
          state.comments = res.items;
          state.params.page += 1;
          state.total = res.total;
        }
      } else {
        if (currentPage == 0) {
          state.comments = res.items;
        } else {
          state.comments = state.comments.concat(res.items);
        }

        state.params.page += 1;
        state.total = res.total;

        $state && $state.loaded();
      }
      debugger
      emit("success", res.total);
    };

    const handleLoadCommont = async (): Promise<CommentPageModel> => {
      state.params.articleId = props.articleId || 0;
      const data: CommentPageModel = await service.get(comment.page, {
        params: state.params,
      });
      return data;
    };

    return {
      ...toRefs(state),
      handleInfiniteLoad,
    };
  },
});
</script>

<style lang="scss">
</style>

