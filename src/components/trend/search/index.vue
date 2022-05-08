<template>
  <div class="trend-search">
    {{currentTrend}}
  </div>
</template>
<script>
export default {
  name: 'TrendSearch',
  data() {
    return {
      currentTrend: ''
    };
  },
  created() {
    // watch 路由的参数，以便再次获取数据
    this.$watch(
      () => this.$route.params,
      () => {
        this.currentTrend =this.$route.params.trendId;
      },
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      { immediate: true }
    )
  },
  watch: {
    $route (to, from) {

    }
  },

  methods: {

  }
}

</script> 
<style scoped>

</style>
