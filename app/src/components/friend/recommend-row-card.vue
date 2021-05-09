<template>
  <div class="friend-comp card-bo der-radius">
    <div class="friend-title">推荐网站</div>
    <a-divider />
    <div class="friend-content">
      <a-row :gutter="20">
        <a-col :xs="24" :sm="12" :md="8" v-for="item in friends" :key="item.id">
          <a :href="item.url" target="_blank" class="link-box animate">
            <div class="imgbox">
              <img :src="item.img" />
            </div>
            <div class="desc">
              <h4>{{item.title}}</h4>
              <p>{{item.desc}}</p>
            </div>
          </a>
        </a-col>
      </a-row>

      <!-- <div v-for="a in categories" :key="a.id" class="friend-card">这是分类 {{ a }}</div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    friends: {
      type: Array,
      default: () => [
        {
          title: "MemoyuBlog",
          desc: "个人博客，欢迎来造！做技术，就该深入",
          img:
            "https://raw.githubusercontent.com/Memoyu/CoreMe/master/doc/images/memoyu.png",
          url: "www.baidu.com",
        },
        {
          title: "MemoyuBlog",
          desc: "个人博客，欢迎来造！做技术，就该深入",
          img:
            "https://raw.githubusercontent.com/Memoyu/CoreMe/master/doc/images/memoyu.png",
          url: "www.baidu.com",
        },
        {
          title: "MemoyuBlog",
          desc: "个人博客，欢迎来造！做技术，就该深入",
          img:
            "https://raw.githubusercontent.com/Memoyu/CoreMe/master/doc/images/memoyu.png",
          url: "www.baidu.com",
        },
        {
          title: "MemoyuBlog",
          desc: "个人博客，欢迎来造！做技术，就该深入",
          img:
            "https://raw.githubusercontent.com/Memoyu/CoreMe/master/doc/images/memoyu.png",
          url: "www.baidu.com",
        },
        {
          title: "MemoyuBlog",
          desc: "个人博客，欢迎来造！做技术，就该深入",
          img:
            "https://raw.githubusercontent.com/Memoyu/CoreMe/master/doc/images/memoyu.png",
          url: "www.baidu.com",
        },
        {
          title: "MemoyuBlog",
          desc: "个人博客，欢迎来造！做技术，就该深入",
          img:
            "https://raw.githubusercontent.com/Memoyu/CoreMe/master/doc/images/memoyu.png",
          url: "www.baidu.com",
        },
        {
          title: "MemoyuBlog",
          desc: "个人博客，欢迎来造！做技术，就该深入",
          img:
            "https://raw.githubusercontent.com/Memoyu/CoreMe/master/doc/images/memoyu.png",
          url: "www.baidu.com",
        },
        {
          title: "MemoyuBlog",
          desc: "个人博客，欢迎来造！做技术，就该深入",
          img:
            "https://raw.githubusercontent.com/Memoyu/CoreMe/master/doc/images/memoyu.png",
          url: "www.baidu.com",
        },
        {
          title: "MemoyuBlog",
          desc: "个人博客，欢迎来造！做技术，就该深入",
          img:
            "https://raw.githubusercontent.com/Memoyu/CoreMe/master/doc/images/memoyu.png",
          url: "www.baidu.com",
        },
        {
          title: "MemoyuBlog",
          desc: "个人博客，欢迎来造！做技术，就该深入",
          img:
            "https://raw.githubusercontent.com/Memoyu/CoreMe/master/doc/images/memoyu.png",
          url: "www.baidu.com",
        },
        {
          title: "MemoyuBlog",
          desc: "个人博客，欢迎来造！做技术，就该深入",
          img:
            "https://raw.githubusercontent.com/Memoyu/CoreMe/master/doc/images/memoyu.png",
          url: "www.baidu.com",
        },
      ],
    },
  },
});
</script>

<style lang="scss" scoped>
.friend-comp {
  padding: 10px;
  background: white;
  .friend-title {
    font-size: 19px;
    font-weight: bold;
    margin: 20px;
  }
  .friend-content {
    .ant-col {
      margin-bottom: 35px;
    }
    .ant-col:before {
      content: "";
      border: 0.5px solid #dedede;
      background: #fff;
      display: block;
      position: absolute;
      left: 14px;
      right: 14px;
      bottom: -4px;
      height: 5px;
      z-index: 9;
    }
    .ant-col:after {
      content: "";
      border: 0.5px solid #dedede;
      background: #fff;
      display: block;
      position: absolute;
      right: 18px;
      left: 18px;
      bottom: -8px;
      height: 5px;
      box-shadow: 2px 2px 10px #e4e4e4;
    }

    .ant-col:hover .link-box {
      transform: translateY(15px);
      background: #ecf0f1;
    }

    .animate {
      transition: transform 0.26s;
    }

    .link-box {
      position: relative;
      display: flex;
      height: 120px;
      border: 1px solid #dedede;
      background: #fff;
      padding: 8px 20px;
      display: flex;
      align-items: center;
      z-index: 10;
      box-shadow: 2px -5px 15px #e8e8e8;
      .desc {
        flex: 1;
        overflow: hidden;
        color: #475558;
        font-size: 14px;
        h4 {
          margin: 5px 0;
        }
        p {
          height: 62px;
        }
      }
      .imgbox {
        width: 60px;
        height: 60px;
        margin-right: 20px;
        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>