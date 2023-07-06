import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// export const store =>  store 라는 변수 다른곳에서 사용가능. => 다른 컴포넌트에서 접근하려면 최상단 main.js에서 import 해서 연결해주기
export const store = new Vuex.Store({
  // Vuex설치, 등록
});
