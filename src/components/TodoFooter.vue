<template>
  <div class="clearAllContainer">
    <!-- 모든 리스트 지우기 버튼! -->
    <span class="clearAllBtn" @click="clearAll">
      Clear All <i class="fa fa-eraser" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    clearAll() {
      // localStorage.clear(); // 로컬스토리지 지우기(전부 지우기) => 로컬스토리지의 금지표시(Clear All)와 동알
      // this.$emit("clearAllTodo");
      this.$store.commit("clearAllItems");
    },
  },
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: red;
  display: block;
}
.fa-eraser {
  color: #8763fb;
}
</style>
