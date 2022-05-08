<template>
  <div class="header">
    <span class="title">ReadON Trend</span>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  created() {},
  watch: {
    $route(to, from) {},
  },

  methods: {},
};
</script>
<style scoped>
/* header*/
.header {
  height: 60px;
  line-height: 60px;
  text-align: left;
  background: var(--el-color-primary-light-5);

  box-shadow: inset 0 0px 1px 0px rgb(63 63 63 / 20%);
}
.title {
  font-size: 28px;
  padding: 0 20px;
  font-weight: bold;
  color: aliceblue;
}
</style>
