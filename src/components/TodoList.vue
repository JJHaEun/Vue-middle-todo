<template>
  <div>
    <ul>
      <li v-for="(item, index) in todoItems" :key="index" class="shadow">
        {{ item }}
        <span class="removeBtn" @click="removeTodo(item, index)">
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
    const todoListItem = localStorage.getItem("todoListItem");
    if (todoListItem) {
      this.todoItems = JSON.parse(todoListItem);
    }
  },
  methods: {
    removeTodo(item, index) {
      // 클릭하면 클릭한것 삭제. index를 받을 수 있을것같음.
      // 다만 지금 console.log()를 찍게되면 어느아이템이나 동일하게 작동
      // console.log();

      // 특정 아이템만 가능하게하기..
      console.log(item, index);
      localStorage.removeItem("todoListItem");
      // 특정 인덱스에서 하나 지우기(화면 반영용)
      this.todoItems.splice(index, 1); // splice의 경우 기존배열을 변경해 새로운 배열을 반환(제거한 애들의 배열)
      // 다시 로컬스토리지에 담기
      localStorage.setItem("todoListItem", JSON.parse(this.todoItems));
    },
  },
};
</script>

<style>
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
