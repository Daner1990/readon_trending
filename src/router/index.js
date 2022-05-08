export default [
  {
    name: "TrendingHome",
    path: "/",
    redirect: '/trending/News' 
  },
  {
    name: "Trending",
    path: "/trending/:trendId",
    component: require("@/views/trend/index").default,
  },
];
