<template>
  <div
    class="trend-list"
    v-loading="loading"
    element-loading-text="Loading..."
    :element-loading-svg="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(122, 122, 122, 0.2)"
  >
    <trend-search></trend-search>
    <div>
      <el-table
        :data="trendList"
        :default-sort="{ prop: 'shares', order: 'descending' }"
        stripe
        style="width: 100%"
      >
        <el-table-column prop="title" label="title" width="250" />
        <el-table-column prop="author" label="author" width="120" />
        <el-table-column prop="score" label="trendscore" sortable width="120" />
        <el-table-column prop="shares" label="shares" sortable width="100" />

        <el-table-column prop="pubDate" label="pubDate" width="120" />
        <!-- <el-table-column prop="description" label="description" /> -->

        <el-table-column prop="link" label="link">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <a :href="scope.row.link" target="_blank">{{ scope.row.link }}</a>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="enclosure">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-image :src="scope.row.enclosure" :fit="fit" />
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import TrendSearch from "../../components/trend/search";
import TrendCard from "../../components/trend/card";
import apis from "../../apis/trend";
import apiPaths from "../../constants/apiPath";
import { ref } from 'vue'
export default {
  name: "TrendList",
  data() {
    return {
       svg :`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>`,
      loading:true,
      trendList: [],
    };
  },
  components: {
    TrendSearch,
    TrendCard,
  },
  created() {
    // watch 路由的参数，以便再次获取数据
    this.$watch(
      () => this.$route.params,
      () => {
        this.getTrendListData()
      },
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      { immediate: true }
    )
  },
  mounted() {
    // this.getTrendListData();
  },
  watch: {
    $route(to, from) {},
  },

  methods: {
    getTrendListData() {
      this.trendList = [];
      this.loading = true;
      console.log('trendid',this.$route.params.trendId)
      let trendId = this.$route.params.trendId;
      // let BuzzsumoTrendingUrl = "https://app.buzzsumo.com/search/trends?topic=sports&hours=24&count=24&result_type=trending_now&ignore=false&id=67220&language=en"
      let BuzzsumoTrendingUrl = "https://api.buzzsumo.com/search/trends.json?topic=sports"
      BuzzsumoTrendingUrl += "&api_key=qqrDzIKuYIBKHMfBiNFDnOIsJXqDEByV"
      let url = apiPaths[trendId];
      apis
        .getTrendList(url)
        .then((data) => {
          console.log(data)
          this.trendList = data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
  },
};
</script>
<style scoped>
@import "./index.scss";
</style>
