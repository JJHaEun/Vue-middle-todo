<template>
  <div id="root">
    <!-- 먼저 getters에서 정의한것을 가져와보자 -->
    <h1>dhkfks</h1>
    <p>{{ originalPrice }}</p>

    <p>{{ doublePrice }}</p>
    <p>{{ triplePrice }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["originalPrice", "doublePrice", "triplePrice"]),
    // 헬퍼 함수를 사용시 아래의 코드를 이렇게 단축가능

    // originalPrice() {
    //   return this.$store.getters.originalPrice;
    // },
    // doublePrice() {
    //   return this.$store.getters.doublePrice;
    // },
    // triplePrice() {
    //   return this.$store.getters.triplePrice;
    // },
  },
};
</script>

<style></style>
