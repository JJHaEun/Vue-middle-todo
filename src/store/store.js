import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    let arr;
    if (localStorage.getItem("todoListItem")) {
      console.log(JSON.parse(localStorage.getItem("todoListItem")));
      arr = JSON.parse(localStorage.getItem("todoListItem"));
    }
    console.log(arr);

    return arr;
  },
};

// export const store =>  store 라는 변수 다른곳에서 사용가능. => 다른 컴포넌트에서 접근하려면 최상단 main.js에서 import 해서 연결해주기
export const store = new Vuex.Store({
  // Vuex설치, 등록
  state: {
    todoItems: storage.fetch(),
  },
  getters: {
    getTodoItems(state) {
      return state.todoItems;
    },
  },
  mutations: {
    addOneTodoItem(state, newTodoItem) {
      const object = {
        completed: false,
        item: newTodoItem,
      };

      // 기존의 로컬 스토리지 데이터 가져오기
      const existingItems = localStorage.getItem("todoListItem");
      state.todoItems = existingItems ? JSON.parse(existingItems) : [];

      // 새로운 항목 추가

      // 버튼 클릭할때마다
      state.todoItems.push(object);
      // 저장하는 로직후
      localStorage.setItem("todoListItem", JSON.stringify(state.todoItems));
    },
    removeOneTodoItem(state, payload) {
      localStorage.removeItem("todoListItem");

      // 특정 인덱스에서 하나 지우기(화면 반영용)
      state.todoItems.splice(payload.index, 1); // splice의 경우 기존배열을 변경해 새로운 배열을 반환(제거한 애들의 배열)
      // 다시 로컬스토리지에 담기
      localStorage.setItem("todoListItem", JSON.stringify(state.todoItems));
    },
    todoCheckedItem(state, payload) {
      // todo.completed = !todo.completed;
      state.todoItems[payload.i].completed =
        !state.todoItems[payload.i].completed;
      // 로컬스토리지에 아이템 삭제후 다시 넣기
      // 로컬스토리지 데이터 갱신
      localStorage.removeItem("todoListItem");
      localStorage.setItem("todoListItem", JSON.stringify(state.todoItems));
    },
    clearAllItems(state) {
      localStorage.clear(); // 로컬스토리지 지우기(전부 지우기) => 로컬스토리지의 금지표시(Clear All)와 동알

      // 화면에 보이는 this.todoItems배열도 비우기
      state.todoItems = [];
    },
  },
});
