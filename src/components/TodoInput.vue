<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
    <!-- v-model의 값을 저장. -->
    <!-- <button >add</button> -->
    <span class="appContainer" @click="addTodo">
      <!-- <i class="fa fa-plus addBtn" aria-hidden="true"></i>222 -->
      <i class="fa fa-plus addBtn"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
    -->
      <h3 slot="header">
        경고!!!
        <span @click="ModalShow">
          <i class="fa fa-times closeModalBtn" aria-hidden="true"></i>
        </span>
      </h3>
      <h4 slot="body">입력되지 않았습니다</h4>
      <span slot="footer"
        ><i class="fa fa-copyright" aria-hidden="true"></i>copyright</span
      >
    </Modal>
  </div>
</template>

<script>
import Modal from "./commons/Modal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },

  methods: {
    addTodo() {
      // data 안의 newTodoItem에 접근

      if (this.newTodoItem !== "") {
        this.$emit("addTodoItem", this.newTodoItem);

        // 입력값 초기화
        this.clearInput();
      } else {
        this.ModalShow();
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
    ModalShow() {
      this.showModal = !this.showModal;
    },
  },
  components: {
    // input컨포넌트의 하위 컴포넌트로 모달 컴포넌트 넣음
    Modal,
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
  cursor: pointer;
  /* vertical-align: middle; */
}
.closeModalBtn {
  color: #42b983;
  cursor: pointer;
}
</style>
