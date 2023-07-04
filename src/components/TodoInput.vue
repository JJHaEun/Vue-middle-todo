<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
    <!-- v-model의 값을 저장. -->
    <!-- <button >add</button> -->
    <span class="appContainer" @click="addTodo">
      <!-- <i class="fa fa-plus addBtn" aria-hidden="true"></i>222 -->
      <i class="fa fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: "",
      todoItem: [],
    };
  },
  methods: {
    addTodo() {
      // data 안의 newTodoItem에 접근
      console.log(this.newTodoItem);
      // 버튼 클릭할때마다
      this.todoItem.push(this.newTodoItem);
      // 저장하는 로직후
      localStorage.setItem("todoListItem", JSON.stringify(this.todoItem));
      // 입력값 초기화
      this.clearInput();
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.appContainer {
  float: right;
  height: 100%;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.addBtn {
  font-weight: 800;
  color: white;
  /* vertical-align: middle; */
}
</style>
