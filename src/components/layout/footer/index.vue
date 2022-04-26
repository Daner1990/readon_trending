<template>
  <div class="footer">
    <span class="copyright">Copyright 2022. All Right Reserved</span>

  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
     
    }
  },
  created () {

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
/* footer*/
.footer {
    height: 60px;;
    line-height: 60px;;
    /* text-align: left; */
    background:var(--el-color-primary-light-5)
}
.copyright{
    font-size: 12px;;
    padding: 0 20px;
    font-weight: bold;
    color: aliceblue;
}
</style>
