<template>
  <div class="trend-search">
    <div class="trend-search-title">{{ currentTrend }}</div>
    <dic class="trend-search-content">
      <el-select
        v-model="selectTime.value"
        class="m-2"
        :placeholder="selectTime.label"
        size="large"
      >
        <el-option
          v-for="item in timeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </dic>
  </div>
</template>
<script>
export default {
  name: "TrendSearch",
  props:['filterTime'],
  emits:["updateFilterTime"],
  data() {
    return {
      timeOptions: [
        {
          label: "24 Hours",
          value: 24,
        },
        {
          label: "12 Hours",
          value: 12,
        },
        {
          label: "6 Hours",
          value: 6,
        },
        {
          label: "3 Hours",
          value: 3,
        },
        {
          label: "1 Hours",
          value: 1,
        },
      ],
      selectTime: {},
      currentTrend: "",
    };
  },
  created() {
    // watch 路由的参数，以便再次获取数据
    this.selectTime.label = this.timeOptions[0].label;
    this.selectTime.value = this.timeOptions[0].value;
    this.$watch(
      () => this.$route.params,
      () => {
        this.currentTrend = this.$route.params.trendId;
      },
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      { immediate: true }
    );
    this.$watch(
      () => this.selectTime.value,
      () => {
        console.log("search",this.selectTime.value)
        this.$emit('updateFilterTime',this.selectTime.value)
      },
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      { immediate: true }
    );
  },
  watch: {
    $route(to, from) {},
  },

  methods: {},
};
</script>
<style scoped>
@import "./index.scss";
</style>
