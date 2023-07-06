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
  },
});
