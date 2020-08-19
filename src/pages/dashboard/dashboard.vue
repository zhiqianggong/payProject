<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <el-card class="box-card">
          <h3>0</h3>
          <p>今日总订单数</p>
          <h3>单</h3>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import menu from "@/components/menu";
import header from "@/components/header";
export default {
  data() {
    return {};
  },
  created() {
    // console.log(1);
    // if (sessionStorage.menu == '') {
    //   this.$router.go(0);
    // }
  },
};
</script>

<style>
</style>