<template>
  <div class="readon-tranding-layout common-layout">
    <el-container class="readon-content">
      <el-header>
        <app-header></app-header>
      </el-header>

      <el-container>
        <el-aside width="200px">
           <app-aside></app-aside>
        </el-aside>

        <el-main>
          <div class="readon-center">
            <div class="readon-center-inner">
               <router-view />
            </div>
            <el-container>
              <el-footer>
                <app-footer></app-footer>
              </el-footer>
            </el-container>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppHeader from "./components/layout/header";
import AppFooter from "./components/layout/footer";
import AppAside from "./components/layout/aside";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppAside
  },
};
</script>

<style>
.readon-content {
  height: 100vh;
}
.readon-center-inner{
  min-height: calc(100vh - 120px);;
}
</style>
