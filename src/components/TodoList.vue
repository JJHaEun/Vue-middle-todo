<template>
  <div>
    <ul>
      <li v-for="(item, index) in todoItems" :key="index">{{ item }}</li>
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
};
</script>

<style></style>
