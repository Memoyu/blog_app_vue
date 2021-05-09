<template>
  <footer>
    <div class="foot-text">
      <a href="https://github.com/sweida" target="_blank" class="link">
       <a-icon type="star" theme="filled" />
      </a>
      <span class="base">
        Prower By &nbsp;&nbsp;
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
        © {{ year }} &nbsp;&nbsp;Memoyu &nbsp;&nbsp;<a
          target="_blank"
          style="color: #fff"
          >桂ICP备20005450号-1</a
        >
      </span>
    </div>
  </footer>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
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
  background: #3d4852;
  .link {
    color: #fff;
    .icon {
      font-size: 28px;
      &:hover {
        color: #929292;
      }
    }
  }
  .foot-text {
    display: flex;
    flex-direction: column;
    line-height: 30px;
    position: relative;
    font-size: 14px;
    text-align: center;
    // background: #93a6ab;
    width: 100%;
    padding: 10px 0 15px;
    color: #fff;
    .base {
      span,
      .green {
        color: #ffed4a;
        font-size: 16px;
        margin: 0 2px;
      }
    }
  }
}
</style>