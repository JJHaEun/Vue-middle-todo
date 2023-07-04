<template>
  <div>
    <ul>
      <li v-for="(item, index) in todoItems" :key="index" class="shadow">
        {{ item }}
        <span class="removeBtn" @click="removeTodo">
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
    removeTodo() {},
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
