<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todoItems" :key="index" class="shadow">
        <span @click="toggleComplete(todo, index)">
          <i
            class="checkBtn fa fa-check"
            aria-hidden="true"
            :class="{ checkBtnCompleted: todo.completed }"
          ></i>
        </span>
        <span :class="{ textCompleted: todo.completed }">
          {{ todo.item }}
        </span>
        <span class="removeBtn" @click="removeTodo(todo, index)">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoItems: [],
    };
  },
  created() {
    if (localStorage.getItem("todoListItem") !== "[]") {
      this.todoItems = JSON.parse(localStorage.getItem("todoListItem"));
    }

    console.log(typeof this.todoItems);
  },
  methods: {
    removeTodo(_, index) {
      // 클릭하면 클릭한것 삭제. index를 받을 수 있을것같음.
      // 다만 지금 console.log()를 찍게되면 어느아이템이나 동일하게 작동
      // console.log();

      // 특정 아이템만 가능하게하기..
      // console.log(item, index);
      localStorage.removeItem("todoListItem");
      // 특정 인덱스에서 하나 지우기(화면 반영용)
      this.todoItems.splice(index, 1); // splice의 경우 기존배열을 변경해 새로운 배열을 반환(제거한 애들의 배열)
      // 다시 로컬스토리지에 담기
      localStorage.setItem("todoListItem", JSON.stringify(this.todoItems));
      this.todoItems.push(JSON.parse(localStorage.getItem("todoListItem")));
    },
    toggleComplete(todo, i) {
      // 체크 버튼을 클릭시에 해당 item completed => 토글  t <=> f
      // 해당 인덱스접근
      // todo.completed ? (todo.completed = false) : (todo.completed = true);
      todo.completed = !todo.completed;
      console.log(todo.completed);
      console.log(i);
    },
  },
};
</script>

<style scoped>
ul {
  padding-left: 0px;
  list-style-type: none;
  margin-top: 0px;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
