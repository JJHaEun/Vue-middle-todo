<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <todo-header />
    <!-- // v-on:하위컴포넌트의 이벤트 이름= “현재컴포넌트 메서드 이름” -->
    <todo-input @addTodoItem="addOneTodoItem" />
    <todo-list
      :todoItemsProps="todoItems"
      @removeTodoItem="removeOneTodoItem"
      @completedTodoItem="todoCheckedItem"
    />
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
    // 그럼 input창에 클릭이나 엔터를 치고 해당 이벤트를 올려
    // ⇒ todo추가하는 데이터를 App.vue 에서 처리하게 해보자.
    // 상위 컴포넌트에서 작성 ⇒>
    // v-on:하위컴포넌트의 이벤트 이름= “현재컴포넌트 메서드 이름”
    addOneTodoItem(newTodoItem) {
      let object = {
        completed: false,
        item: newTodoItem,
      };

      // 기존의 로컬 스토리지 데이터 가져오기
      let existingItems = localStorage.getItem("todoListItem");
      this.todoItems = existingItems ? JSON.parse(existingItems) : [];

      // 새로운 항목 추가

      // 버튼 클릭할때마다
      this.todoItems.push(object);
      // 저장하는 로직후
      localStorage.setItem("todoListItem", JSON.stringify(this.todoItems));
    },
    removeOneTodoItem(_, index) {
      localStorage.removeItem("todoListItem");

      // 특정 인덱스에서 하나 지우기(화면 반영용)
      this.todoItems.splice(index, 1); // splice의 경우 기존배열을 변경해 새로운 배열을 반환(제거한 애들의 배열)
      // 다시 로컬스토리지에 담기
      localStorage.setItem("todoListItem", JSON.stringify(this.todoItems));
    },
    todoCheckedItem(_, i) {
      // todo.completed = !todo.completed;
      this.todoItems[i].completed = !this.todoItems[i].completed;
      // 로컬스토리지에 아이템 삭제후 다시 넣기
      // 로컬스토리지 데이터 갱신
      localStorage.removeItem("todoListItem");
      localStorage.setItem("todoListItem", JSON.stringify(this.todoItems));
    },
    clearAllItems() {
      localStorage.clear(); // 로컬스토리지 지우기(전부 지우기) => 로컬스토리지의 금지표시(Clear All)와 동알

      // 화면에 보이는 this.todoItems배열도 비우기
      this.todoItems = [];
    },
  },
  created() {
    if (localStorage.getItem("todoListItem") !== "[]") {
      this.todoItems = JSON.parse(localStorage.getItem("todoListItem"));
    }
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
