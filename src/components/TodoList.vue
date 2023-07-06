<template>
  <div>
    <transition-group name="list" tag="ul">
      <!--  v-for="(todo, index) in this.$store.state.todoItems" -->
      <li
        v-for="(todo, index) in this.getTodoItems"
        :key="index + 1"
        class="shadow"
      >
        <span @click="toggleComplete({ todo, index })">
          <i
            class="checkBtn fa fa-check"
            aria-hidden="true"
            :class="{ checkBtnCompleted: todo.completed }"
          ></i>
        </span>
        <span :class="{ textCompleted: todo.completed }">
          {{ todo.item }}
        </span>
        <span class="removeBtn" @click="removeTodo({ todo, index })">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      // 기존 메서드명: 해당 메서드 실행되었을때 호출할 mutations
      //  this.$store.commit("removeOneTodoItem", {todo,index}); 이 부분을 간결하게 줄여 편하게 사용할 수 있게 하는 헬퍼함수 mapMutations
      // 헬퍼 함수들은 인자를 선언하지 않아도 호출하는 곳에서 인자가 있다면 암묵적으로 넘긴다.
      removeTodo: "removeOneTodoItem",
      toggleComplete: "todoCheckedItem",
    }),

    // methods.부분이 스토어의 mutations와 같다!!
    // removeTodo(todo, index) {
    //   // 클릭하면 클릭한것 삭제. index를 받을 수 있을것같음.
    //   // 다만 지금 console.log()를 찍게되면 어느아이템이나 동일하게 작동
    //   // console.log();

    //   // 특정 아이템만 가능하게하기..
    //   // console.log(item, index);
    //   // this.$emit("removeTodoItem", todo, index);
    //   this.$store.commit("removeOneTodoItem", {
    //     todo,
    //     index,
    //   });
    // },
    // toggleComplete(todo, i) {
    //   // 체크 버튼을 클릭시에 해당 item completed => 토글  t <=> f
    //   // 해당 요소 접근
    //   // this.$emit("completedTodoItem", todo, i);
    //   this.$store.commit("todoCheckedItem", {
    //     i,
    //   });
    //   // todo.completed ? (todo.completed = false) : (todo.completed = true);
    // },
  },
  computed: {
    // todoItemsGet() {
    //   return this.$store.state.todoItems;
    // },

    // 스토어의 getters메서드 적어주기
    ...mapGetters(["getTodoItems"]),
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
  cursor: pointer;
}
.checkBtnCompleted {
  color: #b3adad;
  cursor: pointer;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
  cursor: pointer;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
