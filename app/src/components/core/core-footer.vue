<template>
  <footer>
    <div class="foot-text">
      <span class="base">
        Prower By
        <a
          class="green"
          href="https://github.com/dotnet/aspnetcore"
          target="_blank"
          >.NET 5</a
        >
        +
        <a class="green" href="https://github.com/vuejs/vue" target="_blank"
          >Vue</a
        >
      </span>
      <span>
        © {{ year }} &nbsp;Memoyu 
        <a href="https://github.com/Memoyu" target="_blank" class="link">
          <icon class="icon" icon="GithubOutlined" />
        </a>
        <a target="_blank" style="color: black">桂ICP备20005450号-1</a>
      </span>
    </div>
  </footer>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Icon } from "@/icon";

export default defineComponent({
  components: { Icon },
  setup() {
    const longTime = ref();
    return {
      longTime,
      year: new Date().getFullYear(),
    };
  },
  beforeMount() {
    setInterval(getRemainderTime, 1000);

    function getRemainderTime() {
      let startTime = "2018-10-10";
      let s1 = new Date(startTime.replace(/-/g, "/")),
        s2 = new Date(),
        runTime = parseInt((s2.getTime() - s1.getTime()) / 1000);
      let day = Math.floor(runTime / 86400);
      runTime = runTime % 86400;
      let hour = Math.floor(runTime / 3600);
      runTime = runTime % 3600;
      let minute = Math.floor(runTime / 60);
      runTime = runTime % 60;
      let second = runTime;

      //   longTime.value =
      //     day + "天" + hour + "小时" + minute + "分" + second + "秒";
    }
    getRemainderTime();
  },
  methods: {},
});
</script>

<style scoped lang="scss">
footer {
  // position: relative;
  background: transparent;
  .link {
    margin:0 10px;
    color: black;
    .icon {
      font-size: 16px;
      &:hover {
        color: #929292;
      }
    }
  }
  .foot-text {
    display: flex;
    flex-direction: column;
    position: relative;
    font-size: 14px;
    text-align: center;
    // background: #93a6ab;
    width: 100%;
    padding: 10px 0 15px;
    color: black;
    .base {
      span,
      .green {
        color: blue($color: #000000);
        font-size: 16px;
        margin: 0 2px;
      }
    }
  }
}
</style>