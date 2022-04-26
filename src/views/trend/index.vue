<template>
  <div class="trend-list">
      <trend-search></trend-search>
  </div>
</template>
<script>
import TrendSearch from "../../components/trend/search";
import TrendCard from "../../components/trend/card";
export default {
  name: "TrendList",
  data() {
    return {};
  },
  components: {
    TrendSearch,
    TrendCard,
  },
  created() {},
  watch: {
    $route(to, from) {},
  },

  methods: {},
};
</script>
<style scoped></style>
