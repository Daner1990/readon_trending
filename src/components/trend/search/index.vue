<template>
  <div class="trend-search">
    <div class="trend-search-title">{{ currentTrend }}</div>
    <dic class="trend-search-content">
      <el-select
        v-model="selectTime.value"
        class="m-2 trend-search-time"
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

      <el-select
        v-model="selectCourtry.value"
        class="m-2 trend-search-courtry"
        :placeholder="selectCourtry.label"
        size="large"
      >
        <el-option
          v-for="item in courtryOptions"
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
  props: ["filterTime", "filterCourtry"],
  emits: ["updateFilterTime", "updateFilterCourtry"],
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
      courtryOptions: [
        {
          label: "All Courtries",
          value: "all",
        },
        {
          label: "Japan",
          value: "japan",
        },
        {
          label: "India",
          value: "india",
        },
        {
          label: "Indonesia",
          value: "indonesia",
        },
        { label: "South Korea", value: "southkorea" },
        {
          label: "USA",
          value: "usa",
        },
        {
          label: "Franch",
          value: "franch",
        },
        {
          label: "Spain",
          value: "spain",
        },
        {
          label: "Germany",
          value: "germany",
        },
        {
          label: "United Kingdom",
          value: "uk",
        },
      ],

      selectTime: {},
      selectCourtry: {},
      currentTrend: "",
    };
  },
  created() {
    // watch 路由的参数，以便再次获取数据
    this.selectTime.label = this.timeOptions[0].label;
    this.selectTime.value = this.timeOptions[0].value;

    this.selectCourtry.label = this.courtryOptions[0].label;
    this.selectCourtry.value = this.courtryOptions[0].value;

    this.$watch(
      () => this.$route.params,
      () => {
        this.currentTrend = this.$route.params.trendId;
      },
      { immediate: true }
    );
    this.$watch(
      () => this.selectTime.value,
      () => {
        console.log("selectTime", this.selectTime.value);
        this.$emit("updateFilterTime", this.selectTime.value);
      },
      { immediate: true }
    );
    this.$watch(
      () => this.selectCourtry.value,
      () => {
        console.log("search", this.selectCourtry.value);
        this.$emit("updateFilterCourtry", this.selectCourtry.value);
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
