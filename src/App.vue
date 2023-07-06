<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <todo-header />
    <!-- // v-on:하위컴포넌트의 이벤트 이름= “현재컴포넌트 메서드 이름” -->
    <todo-input />
    <todo-list />
    <todo-footer @clearAllTodo="clearAllItems" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    // methods.부분이 스토어의 mutations와 같다!!

    // 그럼 input창에 클릭이나 엔터를 치고 해당 이벤트를 올려
    // ⇒ todo추가하는 데이터를 App.vue 에서 처리하게 해보자.
    // 상위 컴포넌트에서 작성 ⇒>
    // v-on:하위컴포넌트의 이벤트 이름= “현재컴포넌트 메서드 이름”

    clearAllItems() {
      localStorage.clear(); // 로컬스토리지 지우기(전부 지우기) => 로컬스토리지의 금지표시(Clear All)와 동알

      // 화면에 보이는 this.todoItems배열도 비우기
      this.todoItems = [];
    },
  },

  components: {
    // HelloWorld
    "todo-header": TodoHeader,
    "todo-input": TodoInput,
    "todo-list": TodoList,
    "todo-footer": TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
