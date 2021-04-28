<template>
  <div class="home-page">
    <div class="hello-title">Hello TodoList</div>
    <div class="description">
      Todo. Todo. Todo. Todo. Todo. Todo. Todo..........
    </div>
    
    <div class="content">
      <div class="loading" v-if="loading">Loading....</div>
      <template v-else>
        <section class="left">
          <div class="section-title">
            <span>任务 🚗</span>
            <span v-if="todo.length" class="total">
              Total: {{ todo.length }}
            </span>
          </div>
          <div :class="['list', !todo.length && 'is-empty']">
            <template v-if="todo.length">
              
            </template>
            <div v-else>Empty.</div>
          </div>
        </section>
        <section class="right">
          <div class="section-title">
            <span>
              归档 👋
            </span>
            <span v-if="archive.length" class="total">
              Total: {{ archive.length }}
            </span>
          </div>
          <div :class="['list', !archive.length && 'is-empty']">
            <template v-if="archive.length">
             
            </template>
            <div v-else>Empty.</div>
          </div>
        </section>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
  },
  setup() {
   const todo: never[] = [];
   const archive: never[] = [];
    return {
      todo,
      archive
    };
  }
});
</script>

<style scoped lang="scss">
.home-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 28px 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  .hello-title {
    font-size: 40px;
    font-weight: 300;
  }
  .description {
    font-size: 18px;
    font-weight: 300;
    color: #aaa;
    margin-bottom: 50px;
  }
  .content {
    display: flex;
    flex: 1;
    overflow: hidden;
    .loading {
      font-size: 24px;
      font-weight: 300;
      width: 100%;
      color: #aaa;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .left,
    .right {
      width: calc(50% - 20px);
      /* flex-basis: 50%; */
      display: flex;
      flex-direction: column;
    }
    .left {
      margin-right: 40px;
    }
    .section-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .total {
        font-size: 13px;
        color: #aaa;
        font-weight: 300;
      }
    }
    .list {
      flex: 1;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 4px 0;
      overflow-y: auto;
      &.is-empty {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #aaa;
        font-size: 20px;
      }
      &:hover {
        border-color: steelblue;
      }
    }
  }
}
</style>